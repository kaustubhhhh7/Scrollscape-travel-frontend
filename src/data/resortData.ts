export interface Room {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
    features: string[];
}

export interface Experience {
    id: string;
    title: string;
    price: string;
    duration: string;
    description: string;
    image: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    avatar: string;
}

export const rooms: Room[] = [
    {
        id: '1',
        title: 'The Royal Azure Suite',
        category: 'Suites',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000',
        description: 'A masterwork of space and light, featuring a private floor and 360-degree ocean views.',
        features: ['120 sqm', 'Private Balcony', 'Butler Service', 'Infinity Tub']
    },
    {
        id: '2',
        title: 'Sanctuary Pool Villa',
        category: 'Villas',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000',
        description: 'Secluded elegance with a private infinity pool and direct access to white sand shores.',
        features: ['250 sqm', 'Private Pool', 'Outdoor Shower', 'Sun Deck']
    },
    {
        id: '3',
        title: 'Terrace Garden Room',
        category: 'Deluxe',
        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1000',
        description: 'Lush garden settings meet modern luxury, offering a tranquil retreat in the heart of the resort.',
        features: ['65 sqm', 'Garden View', 'King Bed', 'Rain Shower']
    }
];

export const experiences: Experience[] = [
    {
        id: '1',
        title: 'Starlit Private Dining',
        price: 'From $450',
        duration: '3-4 Hours',
        description: 'A bespoke culinary journey served under the celestial canopy on our private pier.',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: '2',
        title: 'Azura Spa Rituals',
        price: 'From $280',
        duration: '120 Minutes',
        description: 'Ancient healing techniques meet modern luxury in our award-winning ocean-front spa.',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000'
    }
];

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Catherine Wentworth',
        role: 'Guest of Royal Suite',
        content: 'An absolute sanctuary. The attention to detail and the personalized service made our stay truly unforgettable.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    {
        id: '2',
        name: 'David Sterling',
        role: 'Returning Guest',
        content: 'We have stayed at top resorts worldwide, but LUMINA stands in a league of its own. Pure perfection.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    }
];
