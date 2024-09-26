import { render, screen } from '@testing-library/react';

import Options from '../Options';

test('display image for each scoop option from server', async () => {
    render(<Options optionType="scoops" />);

    //find imagens
    const scoopImagens = await screen.findAllByRole('img', { name: /scoop$/i })
    expect(scoopImagens).toHaveLength(2);
    expect

    //confirm alt text of images
    const altText = scoopImagens.map((element) => element.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop'])
})

test('display image for each tooping from server', async () => {
    render(<Options optionType="toppings" />);

    //find imagens
    const toppingImagens = await screen.findAllByRole('img', { name: /topping$/i });
    expect(toppingImagens).toHaveLength(3);

    //confirm alt text of images
    const imagesTitle = toppingImagens.map((imagens) => imagens.alt);

    expect(imagesTitle).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping']);
})