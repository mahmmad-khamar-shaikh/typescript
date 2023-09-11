export interface IReport {
    id: number;
    name: string;
}

export async function getContent(): Promise<IReport> {
    return  Promise.resolve({
        id: 1,
        name: 'Optimus'
    });
} 