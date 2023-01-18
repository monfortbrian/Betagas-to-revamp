/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button } from 'theme-ui';
import Typewriter from 'typewriter-effect';
import bannerBg from 'assets/123.png';

export default function Banner() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Our products');
  };

  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Heading as="h1" sx={styles.heroTitle}>
              WE PROVIDE GAS FOR
              <Typewriter
                options={{
                  strings: ['HOME', 'BUSINESS', 'INDUSTRIAL'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Heading>

            <br />
            <Text sx={styles.wrapper.subTitle}>
              Get an LPG Connection is super easy with
              <strong> Betagas</strong>
            </Text>
            <Box as="form" onSubmit={handleSubmit}>
              <Button type="submit" sx={styles.button} variant="primary">
                Our products
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    background: `url(${bannerBg}) no-repeat center top / cover`,
    backgroundSize: ['100%', null, null, null, 'cover'],
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: [null, null, null, null, '50vh', '100vh'],
  },
  bannerContent: {
    color: '#fff',

    maxWidth: [null, null, null, 600, 500, null, 600],
    padding: [
      '20px',
      '30px',
      null,
      null,
      null,
      '30px 50px 60px',
      '50px 60px 90px',
    ],
    borderRadius: 5,
    m: ['110px 0 0', null, null, '110px auto 0', '60px 0 0', null, 0],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ':
      {
        maxWidth: 515,
        mt: 70,
        padding: '30px 50px 65px',
      },
  },

  heroTitle: {
    fontSize: [22, 28, 28, 40, , 5, 6],
    color: '#ffffff',
    fontWeight: 700,
    letterSpacing: 'heading',
    lineHeight: [1.4, null, null, null, null, null, 1.57],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ':
      {
        fontSize: 40,
      },
  },
  typewriter: {
    color: '#ff00ff',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
    },
    subTitle: {
      fontSize: [1, null, null, '10px', 1],
      fontWeight: 300,
      lineHeight: 1.9,
    },
  },
  desc: {
    fontSize: [15, 16, 15, 17],
    lineHeight: [1.53, 1.53, 1.53, 2, 2.4, 2, 2.48],
    maxWidth: 440,
    marginTop: [15, 15, 15, null, null, null, 30],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ':
      {
        mt: 15,
      },
  },
  select: {
    marginTop: 30,
    select: {
      minWidth: ['auto', 'auto', 'initial'],
    },
  },
  button: {
    fontSize: 20,
    fontWeight: 500,
    marginTop: 20,
    width: '100%',
    minHeight: [50, null, null, null, 60],
    fontSize: [16, 16, 16, 20],
    ':focus': {
      outline: '0 none',
    },
  },
};
