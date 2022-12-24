/** @jsx jsx */
import { jsx, Box, Grid, Container, Image, Heading, Text } from "theme-ui";
import { Link } from "components/link";
import data from "./footer.data";
import FooterLogo from "assets/betagas logo.png";
import t from "../../../src/locales";
import { useRouter } from "next/router";
import {
	FaEnvelope,
	FaFacebookSquare,
	FaFax,
	FaInstagram,
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { IoMdBatteryCharging } from "react-icons/io";

export default function Footer() {
	const { locale } = useRouter();

	return (
		<footer sx={styles.footer}>
			<Container>
				{/* <Grid sx={styles.widgets}>
					{data.widgets.map(item => (
						<Box
							key={`footer-widget--key${item.id}`}
							sx={styles.widgets.widgetItem}
						>
							<Image src={item.iconSrc} alt={item.altText} />
							<Box sx={styles.widgets.infoWrapper}>
								<Heading as="h3">{item.title}</Heading>
								<Text as="p">{item.description}</Text>
							</Box>
						</Box>
					))}
				</Grid> */}

				<Box sx={styles.footer.footerTopArea}>
					<Link path="/">
						<Image src={FooterLogo} alt="Logo" />
					</Link>
					<Box>
						<div sx={styles.footer.footerLocation}>
							<FaMapMarkerAlt fontSize="24px" />
							<span>
								Betagas HQ, Av. Songa, Q. Asiatique, Bujumbura,
								Burundi
							</span>
						</div>
						<div sx={styles.footer.footerBoxContainer}>
							<div sx={styles.footer.footerBoxElt}>
								<FaPhoneAlt fontSize="24px" />
								<div sx={styles.footer.footerBoxEltLeft}>
									<h5>PHONE</h5>
									<p>(257)77 502 604</p>
								</div>
							</div>
							<div sx={styles.footer.footerBoxElt}>
								<FaFax fontSize="24px" />
								<div sx={styles.footer.footerBoxEltLeft}>
									<h5>FAX</h5>
									<p>(257)22 221 020</p>
								</div>
							</div>
							<div sx={styles.footer.footerBoxElt}>
								<FaEnvelope fontSize="24px" />
								<div sx={styles.footer.footerBoxEltLeft}>
									<h5>EMAIL</h5>
									<p>ask@betagas.bi</p>
								</div>
							</div>
						</div>
						<div
							sx={{
								display: "flex",
								gap: "24px",
								alignItems: "center",
								marginTop: "10px",
							}}
						>
							<div>our social media</div>
							<FaFacebookSquare />
							<FaTwitter />
							<FaYoutube />
							<FaInstagram />
						</div>
					</Box>
				</Box>

				<Box sx={styles.footer.footerBottomArea}>
					<Box sx={styles.footer.menus}>
						<nav>
							{data.menuItem.map(({ path, label }, i) => (
								<Link
									path={path}
									key={i}
									label={t[locale][label]}
									sx={styles.footer.link}
								/>
							))}
						</nav>
					</Box>
					<Text sx={styles.footer.copyright}>
						Made with by {new Date().getFullYear()} Bluetec
					</Text>
				</Box>
			</Container>
		</footer>
	);
}

const styles = {
	footer: {
		footerTopArea: {
			padding: "120px 0 40px",
			display: "flex",
			flexDirection: ["column", null, null, "row", null, null],
			justifyContent: "space-between",
			alignItems: "center",
		},
		footerLocation: {
			display: "flex",
			alignItems: "center",
			gap: "12px",
			marginBottom: "10px",
		},
		footerBoxContainer: {
			display: "flex",
			alignItems: "space-between",
			gap: "32px",
		},
		footerBoxElt: {
			display: "flex",
			alignItems: "center",
			gap: "12px",
		},
		footerBoxEltLeft: {
			display: "flex",
			flexDirection: "column",
			alignItems: "start",
			h5: {
				margin: 0,
				marginBottom: "-6px",
			},
			p: {
				margin: 0,
				padding: 0,
			},
		},
		footerBottomArea: {
			borderTop: "1px solid",
			borderTopColor: "border_color",
			display: "flex",
			pt: [7, null, 8],
			pb: ["40px", null, "100px"],
			textAlign: "center",
			flexDirection: "column",
		},
		menus: {
			mt: [3, 4],
			mb: 2,
			nav: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexWrap: "wrap",
			},
		},

		link: {
			fontSize: [1, "15px"],
			color: "text",
			fontWeight: "400",
			mb: 2,
			cursor: "pointer",
			transition: "all 0.35s",
			display: "block",
			textDecoration: "none",
			lineHeight: [1.5, null, 1.8],
			px: [2, null, 4],
			":hover": {
				color: "primary",
			},
		},
		copyright: {
			fontSize: [1, "15px"],
			width: "100%",
		},
	},
	// widgets: {
	// 	py: [8, null, 9],
	// 	px: [4, 0, 3, null, 7, 10],
	// 	width: ["100%", "80%", "100%"],
	// 	mx: "auto",
	// 	gridGap: ["40px 0", null, "45px 30px", null, "60px 30px", "50px 90px"],
	// 	gridTemplateColumns: [
	// 		"repeat(1,1fr)",
	// 		null,
	// 		"repeat(2,1fr)",
	// 		"repeat(3,1fr)",
	// 	],
	// 	widgetItem: {
	// 		textAlign: "center",
	// 	},
	// 	infoWrapper: {
	// 		mt: [2, 3, null, 2, 4],
	// 		mb: -1,
	// 		h3: {
	// 			fontSize: [3, null, null, 2, 3, 4],
	// 			color: "heading_secondary",
	// 			lineHeight: 1.4,
	// 			fontWeight: 700,
	// 			mb: [2, null, null, null, "15px"],
	// 		},

	// 		p: {
	// 			fontSize: [1, "15px"],
	// 			fontWeight: 400,
	// 			lineHeight: 2,
	// 		},
	// 	},
	// },
};
