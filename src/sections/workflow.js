/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';
import { FaShuttleVan, FaLocationArrow } from 'react-icons/fa';
import PatternBG from 'assets/patternBG.png';
import ArrowOdd from 'assets/arrowOdd.svg';
import ArrowEven from 'assets/arrowEven.svg';

const data = [
  {
    id: 1,
    icon: <FaShuttleVan />,
    title: 'BAPRO',
    text: 'Asiatique,à cote de Zanzi',
  },
  {
    id: 2,
    icon: <FaLocationArrow />,
    title: "MUH'ICASH",
    text: 'Rohero 1, en face de Title Foncier',
  },
  {
    id: 3,
    icon: <FaLocationArrow />,
    title: 'HAVILLA GAS',
    text: 'Route Rumonge, Limba House en face de Kira',
  },
  {
    id: 4,
    icon: <FaLocationArrow />,
    title: 'ATLANTIS MART',
    text: 'Station Pont Muha, Route Rumonge.',
  },
  {
    id: 5,
    icon: <FaLocationArrow />,
    title: 'B.B.D',
    text: 'Avenue du Large',
  },
  {
    id: 6,
    icon: <FaLocationArrow />,
    title: 'HOME GAS',
    text: 'En face de Face à Face',
  },
  {
    id: 7,
    icon: <FaLocationArrow />,
    title: 'ISSA',
    text: 'A côté de ALCHEM SIEGE',
  },
  {
    id: 8,
    icon: <FaLocationArrow />,
    title: 'FIDODIDO',
    text: 'Rohero 1, Avenue Muyinga',
  },
];

export default function WorkFlow() {
  return (
    <section sx={styles.workflow}>
      <Container>
        <SectionHeader slogan="Our Distributors" isWhite={true} />
        <h2 sx={styles.hello}>
          Betagas distributors spread across almost all the areas in Burundi{' '}
          <br></br>& we are planning to open a branch in Gitega. <br></br>Below
          are our beloved distributors
        </h2>

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{item.icon}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  hello: {
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
  },
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 30px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    // '&:nth-of-type(2n-1)::before': {
    //   backgroundImage: `url(${ArrowOdd})`,
    // },
    // '&:nth-of-type(2n)::before': {
    //   backgroundImage: `url(${ArrowEven})`,
    //   top: 17,
    // },
    '&:last-child::before': {
      display: 'none',
    },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
};
