import React from 'react';
import footer from './footer.module.css';
import Button from './button';

const currentYear = new Date().getFullYear();

const footerLinks = [
    {
        title: 'Products',
        items: ['Recruiting', 'Onboarding', 'Pricing'],
    },
    {
        title: 'Segments',
        items: ['Enterprise', 'Small to midsize'],
    },
    {
        title: 'Solutions',
        items: [
            'Integrations',
            'Structured hiring',
            'Talent sourcing',
            'Candidate experience',
            'Diversity, equity & inclusion',
            'More solutions',
        ],
    },
    {
        title: 'Resources',
        items: ['Blog', 'Guidance', 'Customer stories', 'Support', 'Developer resources'],
    },
    {
        title: 'Platform',
        items: ['Ethical principles', 'Services', 'Mobile', 'APIs', 'Security', 'GDPR'],
    },
    {
        title: 'About us',
        items: ['Mission', 'Belonging', 'Company', 'Careers', 'Press & awards', 'Contact'],
    },
    {
        title: 'Community',
        items: ['Events', 'Open', 'Talent Makers', 'Newsletter'],
    },
];

const FooterSection = ({ title, items }) => (
    <div className={footer.section}>
        <p>{title}</p>
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <a href="/">{item}</a>
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
    return (
        <footer className={footer.foot}>
            <div className={footer.links}>
                <div className={footer.left}>
                    <div>
                        {footerLinks.slice(0, 3).map((section) => (
                            <FooterSection key={section.title} title={section.title} items={section.items} />
                        ))}
                    </div>
                    <div>
                        {footerLinks.slice(3, 5).map((section) => (
                            <FooterSection key={section.title} title={section.title} items={section.items} />
                        ))}
                    </div>
                    <div>
                        {footerLinks.slice(5).map((section) => (
                            <FooterSection key={section.title} title={section.title} items={section.items} />
                        ))}
                    </div>
                </div>
                <div className={footer.right}>
                    <p>Modern Recruiter newsletter</p>
                    <p>Our bi-weekly newsletter full of inspiration, podcasts, trends and news.</p>
                    <form action="" className={footer.form}>
                        <label>Email address</label>
                        <input type="text" />
                        <Button
                            text="Subscribe"
                            background="transparent"
                            color="white"
                            border="1px solid white"
                        />
                    </form>
                </div>
            </div>
            <p className={footer.small}>©{currentYear} Greenhouse Software, Inc.</p>
            <p className={footer.small}>
                “Hire for what’s next” and “Greenhouse Talent Makers” are trademarks of Greenhouse
                Software.
            </p>
        </footer>
    );
};

export default Footer;
