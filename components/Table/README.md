This is a table, which can be used to present an array of objects. It therefore uses a schema, which has also to be
passed. The schema defines the order of the columns and the title it is displaying in the header.

Mind that every object in the `items` array must contain an `id` value, since it is used to set the
[`key` property of React](https://facebook.github.io/react/docs/lists-and-keys.html#keys).

    const items = [
        {
            id: 1,
            value1: "value 1.1",
            value2: "value 1.2",
        },
        {
            id: 2,
            value1: "value 2.1",
            value2: "value 2.2",
        },
    ];

    const schema = {
        value1: {
            title: "First value",
        },
        value2: {
            title: "Second value",
        },
    };

    <Table items={items} schema={schema}/>
