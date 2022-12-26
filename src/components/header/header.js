/** @jsx jsx */
import { jsx, Container, Flex, Button, Select, Box } from "theme-ui";
import { keyframes } from "@emotion/core";
import { Link } from "react-scroll";
import Logo from "components/logo";
import LogoDark from "assets/betagas logo.png";
import { DrawerProvider } from "../../contexts/drawer/drawer.provider";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";
import { FaLanguage } from "react-icons/fa";

import t from "../../locales";
import { useRouter } from "next/router";
import useClickOutside from "hooks/useClickOutside";
import { useRef, useState } from "react";

export default function Header({ className }) {
	const router = useRouter();
	const { locale } = router;
	const [isActive, setIsActive] = useState(false);
	const ref = useRef(null);

	useClickOutside(ref, () => setIsActive(false));

	const toEnglish = () => {
		router.push(router.pathname, router.pathname, { locale: "en" });
		setIsActive(false);
	};
	const toFrench = () => {
		router.push(router.pathname, router.pathname, { locale: "fr" });
		setIsActive(false);
	};

	return (
		<DrawerProvider>
			<header sx={styles.header} className={className} id="header">
				<Box sx={styles.container}>
					<Logo src={LogoDark} />

					<Flex as="nav" sx={styles.nav}>
						{menuItems.map(({ path, label }, i) => (
							<Link
								activeClass="active"
								to={path}
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								key={i}
							>
								{t[locale][label]}
							</Link>
						))}
					</Flex>
					<Flex
						sx={{
							gap: 2,
							alignItems: "center",
						}}
					>
						<div sx={styles.menu} ref={ref}>
							<button
								sx={styles.menuButton}
								onClick={() => setIsActive(x => !x)}
							>
								<FaLanguage />
							</button>
							<div
								sx={{
									...styles.menuList,
									opacity: `${isActive ? 1 : 0}`,
									visibility: `${
										isActive ? "visible" : "hidden"
									}`,
									transform: `${
										isActive
											? "translateY(0px)"
											: "translateY(30px)"
									}`,
								}}
							>
								<div
									sx={styles.menuListItem}
									onClick={toEnglish}
									className={locale === "en" ? "active" : ""}
								>
									{t[locale]["English"]}
								</div>
								<div
									sx={styles.menuListItem}
									onClick={toFrench}
									className={locale === "fr" ? "active" : ""}
								>
									{t[locale]["French"]}
								</div>
							</div>
						</div>
						<Button
							className="donate__btn"
							variant="secondary"
							aria-label="Become Distributor"
						>
							Become Distributor
						</Button>
					</Flex>
					<MobileDrawer />
				</Box>
			</header>
		</DrawerProvider>
	);
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
	header: {
		color: "text",
		fontWeight: "body",
		py: 4,
		width: "100%",
		position: "absolute",
		top: 0,
		left: 0,
		backgroundColor: "transparent",
		transition: "all 0.4s ease",
		animation: `${positionAnim} 0.4s ease`,
		".donate__btn": {
			flexShrink: 0,
			mr: [15, 20, null, null, 0],
			ml: ["auto", null, null, null, 0],
		},
		"&.sticky": {
			position: "fixed",
			backgroundColor: "background",
			color: "#000000",
			boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
			py: 3,
			"nev > a": {
				color: "text",
			},
		},
	},
	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		px: [4, 6],
		maxWidth: "1400px",
		mx: "auto",
	},
	nav: {
		mx: "auto",
		display: "none",
		"@media screen and (min-width: 1024px)": {
			display: "block",
		},
		a: {
			fontSize: 2,
			fontWeight: "body",
			px: 5,
			cursor: "pointer",
			lineHeight: "1.2",
			transition: "all 0.15s",
			"&:hover": {
				color: "primary",
			},
			"&.active": {
				color: "primary",
			},
		},
	},
	menu: {
		position: "relative",
	},
	menuButton: {
		padding: "6px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontSize: "22px",
		cursor: "pointer",
		backgroundColor: "#fff",
		borderRadius: "4px",
		border: "2px solid #043CFD",
		color: "#043CFD",
		outline: "none",
	},
	menuList: {
		transition: "300ms all ease",
		position: "absolute",
		top: "50px",
		width: "100px",
		border: "1px solid #043CFD",
		padding: "6px",
		borderRadius: "4px",
		backgroundColor: "#fff",
	},
	menuListItem: {
		transition: "300ms all ease",
		cursor: "pointer",
		padding: "0 4px",
		color: "#043CFD",
		borderRadius: "4px",
		margin: "4px 0",

		"&:hover": {
			backgroundColor: "#d6dfff",
			color: "#043CFD",
		},
		"&.active": {
			backgroundColor: "#043CFD",
			color: "#fff",
		},
	},
};
