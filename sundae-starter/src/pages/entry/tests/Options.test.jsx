import { render, screen } from '@testing-library/react';

import Options from '../Options';

test('display image for each scoop opntion from server', async () => {
    render(<Options optionType="scoops" />);

    //find imagens
    const scoopImagens = await screen.findAllByRole('img', { name: /scoop$/i })
    expect(scoopImagens).toHaveLength(2);

    //confirm alt text of images
    const altText = scoopImagens.map((element) => element.alt);
    console.log('altText', altText);
    
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop'])
})