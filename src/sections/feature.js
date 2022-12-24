/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Support from "assets/feature/support.svg";
import t from "../../src/locales";
import { useRouter } from "next/router";

const data = [
	{
		id: 1,
		imgSrc: Performance,
		altText: "Environmentally friendly",
		title: "Environmentally friendly",
		text: "LPG is far more environmentally friendly; it creates the least greenhouse gas emission of all the available fossil fuels.",
	},
	{
		id: 2,
		imgSrc: Partnership,
		altText: "Safe and less waste",
		title: "Safe and less waste",
		text: "LPG is convenient, safe to use and easy to use.",
	},
	{
		id: 3,
		imgSrc: Subscription,
		altText: "Faster cooking",
		title: "Faster cooking",
		text: "LPG cooks faster than any other fuel because of its high calorific value.",
	},
	{
		id: 4,
		imgSrc: Support,
		altText: "Economical",
		title: "Economical",
		text: "LPG stoves and burners require less maintenance as compared to other cooking forms.",
	},
];

export default function Feature() {
	const { locale } = useRouter();

	return (
		<section sx={{ variant: "section.feature" }}>
			<Container>
				<SectionHeader
					slogan={t[locale]["Quality features"]}
					title={t[locale]["Why choose us"]}
				/>

				<Grid sx={styles.grid}>
					{data.map(item => (
						<FeatureCard
							key={item.id}
							src={item.imgSrc}
							alt={item.altText}
							title={t[locale][item.title]}
							text={t[locale][item.text]}
						/>
					))}
				</Grid>
			</Container>
		</section>
	);
}

const styles = {
	grid: {
		pt: [0, null, null, null, null, null, 2],
		px: [5, 6, 0, null, 7, 8, 7],
		gridGap: [
			"40px 0",
			null,
			"45px 30px",
			null,
			"60px 50px",
			"70px 50px",
			null,
			"80px 90px",
		],
		gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
	},
};
