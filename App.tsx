
import React, { useState, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { Header } from './components/Header';
import { generateCyberPrompt } from './services/geminiService';
import type { Prompt, AttackStage, Language, OperatingSystem } from './types';
import { ATTACK_STAGES, LANGUAGES, OPERATING_SYSTEMS } from './constants';

const App: React.FC = () => {
    const [selectedStage, setSelectedStage] = useState<AttackStage>(ATTACK_STAGES[0]);
    const [selectedLang, setSelectedLang] = useState<Language>(LANGUAGES[0]);
    const [selectedOS, setSelectedOS] = useState<OperatingSystem>(OPERATING_SYSTEMS[0]);
    const [promptChain, setPromptChain] = useState<Prompt[]>([]);
    const [currentPrompt, setCurrentPrompt] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGeneratePrompt = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setCurrentPrompt('');

        try {
            const previousPrompt = promptChain.length > 0 ? promptChain[promptChain.length - 1] : null;
            const promptText = await generateCyberPrompt(selectedStage, selectedLang, selectedOS, previousPrompt);
            setCurrentPrompt(promptText);
        } catch (err) {
            console.error(err);
            setError('Failed to generate prompt. The model may be unavailable or the request was blocked. Please check your API key and network connection.');
        } finally {
            setIsLoading(false);
        }
    }, [selectedStage, selectedLang, selectedOS, promptChain]);
    
    const handleAddToCampaign = useCallback(() => {
        if (!currentPrompt) return;
        const newPrompt: Prompt = {
            id: `prompt-${Date.now()}`,
            stage: selectedStage,
            lang: selectedLang,
            os: selectedOS,
            text: currentPrompt
        };
        setPromptChain(prev => [...prev, newPrompt]);
        setCurrentPrompt('');
    }, [currentPrompt, selectedStage, selectedLang, selectedOS]);

    const handleClearCampaign = () => {
        setPromptChain([]);
        setCurrentPrompt('');
        setError(null);
    };

    return (
        <div className="min-h-screen flex flex-col bg-matrix-bg text-matrix-text">
            <Header />
            <div className="flex flex-1 flex-col md:flex-row p-4 gap-4">
                <Sidebar
                    selectedStage={selectedStage}
                    setSelectedStage={setSelectedStage}
                    selectedLang={selectedLang}
                    setSelectedLang={setSelectedLang}
                    selectedOS={selectedOS}
                    setSelectedOS={setSelectedOS}
                    promptChain={promptChain}
                    onClearCampaign={handleClearCampaign}
                />
                <MainContent
                    onGeneratePrompt={handleGeneratePrompt}
                    onAddToCampaign={handleAddToCampaign}
                    isLoading={isLoading}
                    currentPrompt={currentPrompt}
                    error={error}
                    canAddToCampaign={!!currentPrompt && !isLoading}
                />
            </div>
        </div>
    );
};

export default App;
