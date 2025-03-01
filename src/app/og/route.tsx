import { ImageResponse } from 'next/og'

export const runtime = 'edge';

// Minimal styles object to reduce bundle size
const styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    padding: '4rem',
    background: '#151515',
  },
  content: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    gap: '2rem',
    color: 'white',
  },
  title: {
    fontSize: '6rem',
    lineHeight: '6rem',
    letterSpacing: '-0.05em',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem'
  },
  avatar: {
    width: '8rem',
    height: '8rem',
    objectFit: 'cover' as const,
    borderRadius: '100%',
  },
  info: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem'
  },
  name: {
    fontSize: '3rem',
    lineHeight: '3rem',
  },
  role: {
    fontSize: '2rem',
    lineHeight: '2rem',
    opacity: '0.6'
  }
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get('title') || 'Portfolio';

  return new ImageResponse(
    (
      <div style={styles.container}>
        <div style={styles.content}>
          <span style={styles.title}>{title}</span>
          <div style={styles.imageContainer}>
            <img
              src="/images/avatar.png"
              style={styles.avatar}
              alt="Avatar"
            />
            <div style={styles.info}>
              <span style={styles.name}>Yuroboo</span>
              <span style={styles.role}>Handmade with love</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}