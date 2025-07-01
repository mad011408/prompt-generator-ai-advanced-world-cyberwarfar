
export interface Prompt {
    id: string;
    stage: AttackStage;
    lang: Language;
    os: OperatingSystem;
    text: string;
}

export type AttackStage = {
    id: string;
    name: string;
    description: string;
};

export type Language = {
    id: string;
    name: string;
};

export type OperatingSystem = {
    id: string;
    name: string;
};
