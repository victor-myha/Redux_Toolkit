/**
 * Unique id generator
 * @returns A unique id. EX: 4c9c44d9-02bf-4933-b244-52cdc7a7fcdd
 */
export const idGenerator = () => {
    // @ts-ignore
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}