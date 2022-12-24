/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";
import { Text } from "theme-ui";
import t from "../../src/locales";
import { useRouter } from "next/router";

const data = [
	{
		id: 1,
		imgSrc: Performance,
		altText: "Our Objective",
		title: "Our Objective",
		text: "To provide the best LPG supply solutions in the most cost effective manner with limited time consumption and always equip ourselves to fulfil customers’ demand.",
	},
	{
		id: 2,
		imgSrc: Partnership,
		altText: "Our Objective",
		title: "Our Mission",
		text: "To contribute to the sustainable economic, environmental and health development of Burundi through the safe distribution and use of LPG.",
	},
	{
		id: 3,
		imgSrc: Subscription,
		altText: "Our Objective",
		title: "Our Vision",
		text: "Our vision is to be a reliable and ethical company in providing high quality service to our customers with complete eco-friendly energy solutions",
	},
];

export default function KeyFeature() {
	const { locale } = useRouter();

	return (
		<section sx={{ variant: "section.keyFeature" }} id="feature">
			<Container>
				<SectionHeader
					slogan={t[locale]["About Us"]}
					title={t[locale]["Welcome to Betagas"]}
				/>
				<SectionHeader
					title2={
						t[locale][
							"Betagas is a leading company of storage and distribution of cleaner, affordable and environmentally friendly LPG since 2020."
						]
					}
				/>

				<Grid sx={styles.grid}>
					{data.map(item => (
						<FeatureCardColumn
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
		width: ["100%", "80%", "100%"],
		mx: "auto",
		gridGap: [
			"35px 0",
			null,
			"40px 40px",
			"50px 60px",
			"30px",
			"50px 40px",
			"55px 90px",
		],
		gridTemplateColumns: [
			"repeat(1,1fr)",
			null,
			"repeat(2,1fr)",
			null,
			"repeat(3,1fr)",
		],
	},
};
