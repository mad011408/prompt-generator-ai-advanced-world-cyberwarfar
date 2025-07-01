import type { AttackStage, Language, OperatingSystem } from './types';

export const ATTACK_STAGES: AttackStage[] = [
    { id: 'recon', name: 'Reconnaissance', description: 'Techniques for active/passive information gathering.' },
    { id: 'exploit', name: 'Exploitation', description: 'Gaining initial access via vulnerabilities.' },
    { id: 'c2', name: 'Command & Control', description: 'Establishing communication with compromised systems.' },
    { id: 'privesc', name: 'Privilege Escalation', description: 'Gaining higher-level permissions on a system.' },
    { id: 'lateral', name: 'Lateral Movement', description: 'Pivoting to other systems within a network.' },
    { id: 'persistence', name: 'Persistence', description: 'Maintaining access across restarts or credential changes.' },
    { id: 'obfuscation', name: 'Obfuscation', description: 'Concealing malware and malicious activities.' },
    { id: 'evasion', name: 'AI Detection Evasion', description: 'Bypassing AI/ML-based security systems.' },
    { id: 'zeroday', name: 'Zero-Day Chaining', description: 'Combining multiple unknown exploits for impact.' },
    { id: 'cloud', name: 'Cloud-Native Attacks', description: 'Exploiting cloud services and infrastructure.' },
    { id: 'postquantum', name: 'Post-Quantum Attack Surface', description: 'Developing attacks against emerging quantum-resistant cryptographic algorithms.' },
    { id: 'advancedrecon', name: 'Advanced Recon & Enumeration', description: 'Utilizing sophisticated techniques to map attack surfaces in complex, federated environments.' },
    { id: 'oast', name: 'Out-of-Band (OAST) Web Attacks', description: 'Exploiting vulnerabilities that trigger out-of-band network interactions (e.g., DNS, HTTP).' },
    { id: 'authattacks', name: 'Authentication/Authorization Attacks', description: 'Bypassing or exploiting authentication/authorization mechanisms like OAuth, SAML, or JWT.' },
    { id: 'cicdpoisoning', name: 'CI/CD Hermetic Build Poisoning', description: 'Injecting malicious code into secure, isolated build environments to compromise the software supply chain.' },
    { id: 'aiautonomous', name: 'AI-Driven Autonomous Attackers', description: 'Creating autonomous agents that can discover, exploit, and pivot through networks without human intervention.' },
    { id: 'geofencedllm', name: 'GeoFenced LLM Exploitation', description: 'Bypassing geographical or logical restrictions implemented within Large Language Models.' },
    { id: 'llmshadowhijack', name: 'LLM Shadow Prompt Hijacking', description: 'Injecting hidden instructions into prompts that are invisible to humans but executed by the LLM.' },
    { id: 'syntheticidentity', name: 'Synthetic Identity Graph Hijack', description: 'Creating and manipulating fake identities within a system\'s trust graph to gain unauthorized access.' },
    { id: 'ble-relay', name: 'BLE Proximity Relay Attack', description: 'Relaying Bluetooth Low Energy communications to bypass proximity-based authentication systems.' },
    { id: 'aiswarmddos', name: 'Polymorphic AI Swarms for DDoS', description: 'Using a decentralized swarm of AI agents that constantly change their attack patterns to overwhelm defenses.' },
    { id: 'ganmalware', name: 'GAN-Generated Malware for Evasion', description: 'Using Generative Adversarial Networks to create novel malware variants that evade signature-based detection.' },
    { id: 'llmexploitgen', name: 'LLM-driven 0-day Exploit Generation', description: 'Leveraging LLMs to analyze code and automatically generate novel exploits for undiscovered vulnerabilities.' },
    { id: 'aideepsocial', name: 'AI-Powered Deep Social Engineering', description: 'Automating hyper-personalized social engineering attacks using AI-generated voice, video, and text.' },
    { id: 'mlpoisoning', name: 'Adversarial ML Model Poisoning', description: 'Corrupting the training data of a machine learning model to create an intentional backdoor or blind spot.' },
    { id: 'autonomousc2', name: 'Autonomous Anonymous C2 Framework', description: 'Deploying C2 infrastructure that autonomously relocates and reconfigures itself on compromised cloud services.' },
    { id: 'quantumc2', name: 'Quantum-Resistant C2 Channel', description: 'Establishing command and control channels using post-quantum cryptographic algorithms to resist future decryption.' },
    { id: 'aivulnchain', name: 'AI Vulnerability Chaining', description: 'Using AI to identify and chain together multiple low-severity vulnerabilities to achieve a high-impact compromise.' },
];

export const LANGUAGES: Language[] = [
    { id: 'python', name: 'Python' },
    { id: 'go', name: 'Go' },
    { id: 'c', name: 'C' },
    { id: 'rust', name: 'Rust' },
    { id: 'bash', name: 'Bash' },
];

export const OPERATING_SYSTEMS: OperatingSystem[] = [
    { id: 'linux', name: 'Linux' },
    { id: 'windows', name: 'Windows' },
    { id: 'macos', name: 'macOS' },
    { id: 'webapp', name: 'Web Applications' },
];