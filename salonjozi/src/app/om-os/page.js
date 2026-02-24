import Image from 'next/image';
import styles from './om-os.module.css';

export default function OmOs() {
  const values = [
    {
      icon: '✨',
      title: 'Kvalitet',
      description: 'Vi bruger kun de bedste produkter og teknikker for at sikre det bedst mulige resultat til vores kunder.',
    },
    {
      icon: '❤️',
      title: 'Passion',
      description: 'Frisørkunst er vores passion. Vi elsker at transformere og inspirere gennem skønhed og stil.',
    },
    {
      icon: '👥',
      title: 'Personlig Service',
      description: 'Hver kunde er unik, og vi tilbyder personlig og individual opmærksomhed til alle.',
    },
    {
      icon: '🎨',
      title: 'Kreativitet',
      description: 'Med års erfaring kombinerer vi klassisk og moderne trends for at skabe det perfekte look.',
    },
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Om Os</h1>
          <p>Velkommen til Salon Jozi - hvor passionen for frisørkunst møder professionelle service</p>
        </div>

        <div className={styles.content}>
          <div className={styles.omOsContainer}>
            <div className={styles.profileSection}>
              <div>
                <Image
                  src="/jozi1.JPG"
                  alt="Hajareh Jozi - Ejer af Salon Jozi"
                  width={450}
                  height={500}
                  className={styles.profileImage}
                  priority
                />
              </div>
              <div className={styles.profileContent}>
                <h2>Hajareh Jozi</h2>
                <p>
                  Velkommen til min salon! Mit navn er <span className={styles.highlight}>Hajareh Jozi</span>, og jeg er
                  stolt ejer af <span className={styles.highlight}>Salon Jozi</span> i Nørresundby.
                </p>
                <p>
                  Med år af erfaring inden for frisørkunst har jeg dedikeret mit liv til at hjælpe mennesker med at føle sig
                  godt i deres eget skind. På min salon tilbyder vi meget mere end bare en klipning - vi tilbyder en
                  transformativ oplevelse.
                </p>
                <p>
                  Hver dag arbejder jeg og mit dygtige team med lidenskab for at skabe flotte hår, der afspejler din personlige
                  stil og øger dit selvtillid.
                </p>
              </div>
            </div>

            <div className={styles.valuesSection}>
              <h3 className={styles.valuesTitle}>Vores Værdier</h3>
              <div className={styles.valuesGrid}>
                {values.map((value, index) => (
                  <div key={index} className={styles.valueCard}>
                    <div className={styles.valueIcon}>{value.icon}</div>
                    <h4 className={styles.valueTitle}>{value.title}</h4>
                    <p className={styles.valueDescription}>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.storySection}>
              <h3 className={styles.storyTitle}>Vores Historie</h3>
              <div className={styles.storyText}>
                <p>
                  Salon Jozi blev født ud af en drøm - en drøm om at skabe et rum, hvor skønhed, komfort og professionel
                  service går hånd i hånd. Med udgangspunkt i Nørresundby har vi bygget et fællesskab af tilfredse kunder, der
                  ikke bare kommer for at få deres hår gjort, men for at blive behandlet som familie.
                </p>
                <p>
                  Jeg tror på, at et godt hårklip ikke bare handler om teknik - det handler om at lytte, forstå og levere et
                  resultat, der overgår forventninger. Min team og jeg er konstant opdateret med de seneste trends og teknikker
                  inden for frisørkunst, samtidig med at vi respekterer klassiske stil.
                </p>
                <p>
                  Fra farvebehandlinger til moderne klipninger og specialiserede tjenester - vi er her for at gøre dig smuk og
                  styrke din selvtillid. Tak fordi I er en del af Salon Jozis rejse!
                </p>
              </div>
            </div>

            <div className={styles.cta}>
              <p className={styles.ctaTekst}>Klar til at opdage din nye look? Besøg os eller book en tid i dag!</p>
              <a href="/book" className={styles.bookButton}>
                Book en Time
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
