'use client';

import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';

const UpcomingWebinars = () => {
    const projects = [
        {
          title: "Stripe",
          description:
            "A technology company that builds economic infrastructure for the internet.",
          link: "https://stripe.com",
        },
        {
          title: "Netflix",
          description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
          link: "https://netflix.com",
        },
        {
          title: "Google",
          description:
            "A multinational technology company that specializes in Internet-related services and products.",
          link: "https://google.com",
        },
        {
          title: "Meta",
          description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
          link: "https://meta.com",
        },
        {
          title: "Amazon",
          description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
          link: "https://amazon.com",
        },
        {
          title: "Microsoft",
          description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
          link: "https://microsoft.com",
        },
      ];
      const featuredWebinars = [
        {
          title: 'Understanding Music Theory',
          description:
            'Dive deep into the fundamentals of music theory and enhance your musical skills.',
          slug: 'understanding-music-theory',
          isFeatured: true,
        },
        {
          title: 'The Art of Songwriting',
          description:
            'Learn the craft of songwriting from experienced musicians and songwriters.',
          slug: 'the-art-of-songwriting',
          isFeatured: true,
        },
        {
          title: 'Mastering Your Instrument',
          description:
            'Advanced techniques to master your musical instrument of choice.',
          slug: 'mastering-your-instrument',
          isFeatured: true,
        },
        {
          title: 'Music Production Essentials',
          description:
            'Get started with music production with this comprehensive overview.',
          slug: 'music-production-essentials',
          isFeatured: true,
        },
        // Added two more webinars
        {
          title: 'Live Performance Techniques',
          description:
            'Enhance your live performance skills with expert tips and strategies.',
          slug: 'live-performance-techniques',
          isFeatured: true,
        },
        {
          title: 'Digital Music Marketing',
          description:
            'Learn how to promote your music effectively in the digital age.',
          slug: 'digital-music-marketing',
          isFeatured: true,
        },
      ];
    return (
        <div className='p-12 bg-gray-900'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div className='text-center '>
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Musical Journey</p>
                </div>
                <div className='mt-10'>
                <HoverEffect items={featuredWebinars.map(webinar => (
                    {
                        title: webinar.title,
                        description: webinar.description,
                        link: '/'
                    }
                ))} />
                </div>
                <div className='mt-10 text-center'>
                    <Link href={'/courses'}
                        className='px-5 py-3 rounded-3xl border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'
                    >
                        View All Webinars
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinars