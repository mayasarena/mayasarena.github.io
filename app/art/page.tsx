import FunPage from '@/components/FunPage';
import { Image } from '@/types/Image';

export default function Home() {

    const images: Image[] = [
        {
            url: '/art/BMO.png',
            alt: 'BMO from Adventure Time',
            medium: 'Procreate'
        },
        {
            url: '/art/Tamagotchi.png',
            alt: 'Tamagotchi',
            medium: 'Procreate'
        },
        {
            url: '/art/Isabelle.png',
            alt: 'Isabelle from Animal Crossing',
            medium: 'Procreate'
        },
        {
            url: '/art/at_1.png',
            alt: 'Adventure Time Still',
            medium: 'Coloured Pencils and Markers'
        },
        {
            url: '/art/at_3.png',
            alt: 'Adventure Time Still',
            medium: 'Coloured Pencils and Markers'
        },
        {
            url: '/art/bulbasaur.png',
            alt: 'Bulbasaur Sleeping',
            medium: 'Coloured Pencils and Markers'
        },
        {
            url: '/art/kirby.png',
            alt: 'Kirby on a Nintendo Switch',
            medium: 'Coloured Pencils and Markers'
        },
        {
            url: '/art/bmo-keycap.png',
            alt: 'BMO Keycap',
            medium: 'Polymore Clay on a PBT Keycap'
        },
    ]

    return (
        <>
        <FunPage images={images} />
        </>
    );
}
