import { DM_Sans, Source_Serif_4 } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const sourceSerif4 = Source_Serif_4({
    subsets: ["latin"],
    variable: "--font-source-serif-4",
    weight: ["400", "600", "700"],
});

export const metadata = {
    title: "Catatan Strategi — PRD Note",
    description: "Product strategy notes and PRD for the note-taking app.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="id" className={`${dmSans.variable} ${sourceSerif4.variable}`}>
            <body style={{ margin: 0, padding: 0, background: "#F5F1EC" }}>
                {children}
            </body>
        </html>
    );
}
