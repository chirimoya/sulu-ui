// @flow
type SchemaItem = {
    title: string,
};

export type Schema = {
    [id: string]: SchemaItem,
};

export type Item = {
    id: mixed,
};
