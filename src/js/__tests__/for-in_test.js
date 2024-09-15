import orderByProps from '../for-in';

test('функция orderByProps должна давать корректный результат', () => {
    const correct = [
        {key: "name", value: "мечник"},
        {key: "level", value: 2},
        {key: "attack", value: 80},
        {key: "defence", value: 40},
        {key: "health", value: 10}
    ];
    const user = {level: 2, health: 10, attack: 80, defence: 40, name: 'мечник'};
    const sortOrder = ["name", "level"];
    const result = orderByProps(user, sortOrder)
    expect(result).toEqual(correct);
});
