import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                {/* Logo og beskrivelse */}
                <div className={styles.footerSection}>
                    <div className={styles.logoSection}>
                        <Image
                            src="/salonJozi.png"
                            alt="SalonJozi Logo"
                            width={100}
                            height={50}
                            className={styles.footerLogo}
                        />
                        <a 
                            href="https://www.mortenrwinther.dk" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.logoLink}
                        >
                            <Image
                                src="/MRW.png"
                                alt="MRW Logo"
                                width={80}
                                height={40}
                                className={styles.mrwLogo}
                            />
                        </a>
                    </div>
                    <p className={styles.description}>
                        Din professionelle skønhedssalon i hjertet af byen. Vi tilbyder kvalitetsbehandlinger med fokus på dit velvære.
                    </p>
                </div>

                {/* Kontaktinformation */}
                <div className={styles.footerSection}>
                    <h3>Kontakt Os</h3>
                    <ul className={styles.contactList}>
                        <li>
                            <strong>Adresse:</strong><br />
                            Lindholmsvej 67,<br />
                            9400 Nørresundby
                        </li>
                        <li>
                            <strong>Telefon:</strong><br />
                            <a href="tel:+4525622030">+45 25 62 20 30</a>
                        </li>
                        <li>
                            <strong>Email:</strong><br />
                            <a href="mailto:info@salonjozi.dk">info@salonjozi.dk</a>
                        </li>
                        <li>
                            <strong>CVR-nr:</strong> 45650715
                        </li>
                    </ul>
                </div>

                {/* Åbningstider */}
                <div className={styles.footerSection}>
                    <h3>Åbningstider</h3>
                    <ul className={styles.hoursList}>
                        <li><span>Mandag - Fredag:</span> <span>10:00 - 17:00</span></li>
                        <li><span>Lørdag:</span> <span>10:00 - 15:00</span></li>
                        <li><span>Søndag:</span> <span>Lukket</span></li>
                    </ul>
                </div>

                {/* Juridiske links */}
                <div className={styles.footerSection}>
                    <h3>Information</h3>
                    <ul className={styles.legalList}>
                        <li><Link href="/privatlivspolitik">Privatlivspolitik</Link></li>
                        <li><Link href="/handelsbetingelser">Handelsbetingelser</Link></li>
                        <li><Link href="/cookiepolitik">Cookiepolitik</Link></li>
                        <li><Link href="/gdpr">GDPR</Link></li>
                    </ul>
                </div>
            </div>

            {/* Google Maps */}
            <div className={styles.mapSection}>
                <h3>Find Os Her</h3>
                <div className={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2168.915945403262!2d9.904718912754843!3d57.07008808965834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4649330046df9d55%3A0xd3a923685ea9308d!2sJozi%20hair%20style!5e0!3m2!1sda!2sdk!4v1771874683577!5m2!1sda!2sdk"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Salon Jozi lokation"
                    ></iframe>
                </div>
            </div>

            {/* Copyright */}
            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} Salon Jozi. Alle rettigheder forbeholdes.</p>
            </div>
        </footer>
    );
}
