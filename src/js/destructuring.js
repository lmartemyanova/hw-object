export default function destructor(obj) {
    const { special } = obj;
    const result = special.map(({ id, name, icon, description }) => {
        if (description === undefined) {
            description = 'Описание недоступно'
        };
        return { id, name, icon, description };
    });
    return result;
};
