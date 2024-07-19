import React from 'react'
import { Link } from 'react-router-dom';
import FooterBanner from './FooterBanner';

export const footerData = {
    description:
      'HotKicks was designed and founded in 2023 by Person. The theme is about sneakers ecommerce thet use for shoes selling around the world.',
    footerLinks: [
      {
        title: 'Main Pages',
        links: [
          { href: '/home', name: 'Home' },
          { href: '/products', name: 'Collections' },
          { href: '/cart', name: 'Cart' },
          { href: '/checkout', name: 'Checkout' },
          { href: '/blog', name: 'Blogs' },
        ],
      },
      {
        title: 'Single Pages',
        links: [
          { href: '/product/yellowLow', name: 'Product Single' },
          {
            href: '/blog/the-evolution-of-sneaker-culture-a-historical-perspective',
            name: 'Blog Single',
          },
        ],
      },
      {
        title: 'Other Pages',
        links: [{ href: '/rt', name: 'Not Found' }],
      },
      {
        title: 'Utility Pages',
        links: [
          { href: '/faq', name: 'FAQS' },
          { href: '/contact', name: 'Contact' },
          { href: '/forgot-pass', name: 'Forgot Password' },
          { href: '/login', name: 'Login' },
          { href: '/signup', name: 'Signup' },
        ],
      },
    ],
  };

function Footer() {
    
    return (
        <div>
          <div className="bg-black text-white">
            <div className="container mx-auto grid gap-10 py-16 lg:grid-cols-2 lg:gap-0">

              <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
                <div className="space-y-5">
                  <h4 className="text-2xl font-medium">
                    Main page
                  </h4>
                  {footerData.footerLinks[0]?.links.map((link) => (
                    <div key={link.name}>
                      <Link href={link.href}>{link.name}</Link>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="grid gap-5">
                    {footerData.footerLinks.slice(1, 3).map((item) => (
                      <div key={item.title} className="space-y-5">
                        <h4 className="text-2xl font-medium">{item.title}</h4>
                        {item.links.map((link) => (
                          <div key={link.name}>
                            <Link href={link.href}>{link.name}</Link>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
    
                <div className="space-y-5">
                  <h4 className="text-2xl font-medium">
                    {footerData.footerLinks[3]?.title}
                  </h4>
                  {footerData.footerLinks[3]?.links.map((link) => (
                    <div key={link.name}>
                      <Link href={link.href}>{link.name}</Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Footer