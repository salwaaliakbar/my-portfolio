interface ProjectData {
    id: number;
    name: string;
    description: string;
    tools: string[];
    role: string;
    code?: string;
    demo?: string;
    status?: string;
    clientProject?: boolean;
}

export type { ProjectData };