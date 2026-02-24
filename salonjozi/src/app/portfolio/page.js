'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './portfolio.module.css';

export default function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/portfolio');
        const data = await response.json();
        
        if (data.error) {
          setError(data.error);
        } else {
          setPortfolioItems(data.items || []);
        }
      } catch (err) {
        console.error('Error fetching portfolio:', err);
        setError('Der opstod en fejl ved hentning af portfolio.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.portfolioPage}>
      <div className={styles.portfolioHeader}>
        <h1>Portfolio</h1>
        <p>Se vores arbejde og tidligere projekter</p>
      </div>

      {error ? (
        <div className={styles.errorState}>
          <h3>Opsætning påkrævet</h3>
          <p>{error}</p>
          <div className={styles.instructions}>
            <h4>For at vise portfolio:</h4>
            <ol>
              <li>Log ind på <a href="https://app.contentful.com" target="_blank" rel="noopener noreferrer">Contentful</a></li>
              <li>Vælg space: <strong>te0utied70y4</strong></li>
              <li>Gå til "Content model" og opret content type: <strong>portfolio</strong></li>
              <li>Tilføj disse felter:
                <ul>
                  <li><strong>title</strong> (Short text)</li>
                  <li><strong>description</strong> (Long text)</li>
                  <li><strong>image</strong> (Media - Single file)</li>
                </ul>
              </li>
              <li>Gå til "Content" og opret portfolio items</li>
              <li>Publish dine portfolio items</li>
            </ol>
          </div>
        </div>
      ) : portfolioItems.length === 0 ? (
        <div className={styles.emptyState}>
          <p>Ingen portfolio items endnu. Tilføj indhold i Contentful.</p>
        </div>
      ) : (
        <div className={styles.portfolioGrid}>
          {portfolioItems.map((item) => {
            const fields = item.fields;
            const title = fields.title || fields.Title || fields.navn || fields.Navn;
            const description = fields.description || fields.Description || fields.beskrivelse || fields.Beskrivelse;
            let imageField = fields.image || fields.Image || fields.billede || fields.Billede || fields.foto || fields.Foto;
            
            // Handle image field - can be array or single
            let imageArray = Array.isArray(imageField) ? imageField : (imageField ? [imageField] : []);
            
            // Extract URLs from image objects
            const imageUrls = imageArray.map(img => {
              if (!img) return null;
              const url = img?.fields?.file?.url || 
                         img?.file?.url ||
                         img?.url;
              return url ? (url.startsWith('//') ? `https:${url}` : url) : null;
            }).filter(Boolean);

            const currentIndex = currentImageIndex[item.sys.id] || 0;
            const currentImageUrl = imageUrls[currentIndex];

            const handleMouseEnter = () => {
              if (imageUrls.length > 1) {
                setCurrentImageIndex(prev => ({
                  ...prev,
                  [item.sys.id]: (currentIndex + 1) % imageUrls.length
                }));
              }
            };

            const handleMouseLeave = () => {
              // Reset to first image
              setCurrentImageIndex(prev => ({
                ...prev,
                [item.sys.id]: 0
              }));
            };

            const handleImageClick = () => {
              if (imageUrls.length > 1) {
                setCurrentImageIndex(prev => ({
                  ...prev,
                  [item.sys.id]: (currentIndex + 1) % imageUrls.length
                }));
              }
            };

            return (
              <div key={item.sys.id} className={styles.portfolioItem}>
                {currentImageUrl ? (
                  <div 
                    className={styles.imageWrapper}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleImageClick}
                  >
                    <Image
                      src={currentImageUrl}
                      alt={`${title || 'Portfolio billede'} ${currentIndex + 1}`}
                      width={600}
                      height={400}
                      className={styles.portfolioImage}
                      priority={false}
                    />
                    {imageUrls.length > 1 && (
                      <div className={styles.imageCounter}>
                        {currentIndex + 1} / {imageUrls.length}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className={styles.imageWrapper}>
                    <div className={styles.imagePlaceholder}>
                      Intet billede
                    </div>
                  </div>
                )}
                <div className={styles.portfolioContent}>
                  {title && <h3>{title}</h3>}
                  {description && <p>{description}</p>}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
