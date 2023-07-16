function addNUmbers(a: number, b: number) {
    return a + b;
}
export default addNUmbers;

export const addStrings = (str1: string, str2: string = "") => `${str1}, ${str2}`

export const format = (title: string, param: string | number): string => `${title} ${param}`;

export const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param));
};

export const fetchData = (url: string): Promise<string> => {
    return Promise.resolve(`Data from ${url}`);
}

const introduce = (salutation: string, ...names: string[]): string{
    return `${salutation} ${names.join(' ')}`;
}

export function getName(user: { firstName: string; lastName: string; }): string {
    return `${user.firstName} ${user.lastName}`;
}