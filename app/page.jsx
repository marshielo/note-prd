"use client";

import { useState } from "react";

const sections = [
    "overview",
    "problem",
    "competitors",
    "features",
    "architecture",
    "onboarding",
    "monetization",
    "roadmap",
];

const sectionLabels = {
    overview: "Ringkasan Eksekutif",
    problem: "Problem Statement",
    competitors: "Analisis Kompetitor",
    features: "Core Features MVP",
    architecture: "Arsitektur & Stack",
    onboarding: "Zero-Friction Onboarding",
    monetization: "Strategi Monetisasi",
    roadmap: "MVP Roadmap",
};

const sectionIcons = {
    overview: "◈",
    problem: "◉",
    competitors: "◎",
    features: "◆",
    architecture: "▣",
    onboarding: "▷",
    monetization: "◇",
    roadmap: "▤",
};

function CompetitorCard({ name, score, pros, cons, gap, color }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            style={{
                background: "#FAF8F5",
                border: "1px solid #E8E2DA",
                borderRadius: 14,
                padding: "20px 22px",
                marginBottom: 14,
                cursor: "pointer",
                transition: "all 0.25s ease",
                borderLeft: `4px solid ${color}`,
            }}
            onClick={() => setOpen(!open)}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <span style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 18, fontWeight: 700, color: "#2C2520" }}>{name}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                        background: color + "18",
                        color: color,
                        padding: "4px 12px",
                        borderRadius: 20,
                        fontSize: 13,
                        fontWeight: 600,
                        fontFamily: "'DM Sans', sans-serif",
                    }}>
                        Relevansi: {score}/10
                    </div>
                    <span style={{ fontSize: 14, color: "#8C8078", transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s", display: "inline-block" }}>▾</span>
                </div>
            </div>
            {open && (
                <div style={{ marginTop: 16, fontSize: 14.5, lineHeight: 1.7, color: "#4A4340", fontFamily: "'DM Sans', sans-serif" }}>
                    <div style={{ marginBottom: 12 }}>
                        <span style={{ fontWeight: 700, color: "#5B8C5A" }}>✦ Kelebihan: </span>{pros}
                    </div>
                    <div style={{ marginBottom: 12 }}>
                        <span style={{ fontWeight: 700, color: "#C4785B" }}>✦ Kekurangan: </span>{cons}
                    </div>
                    <div style={{ background: "#F0EDE8", borderRadius: 10, padding: "12px 16px", fontSize: 13.5 }}>
                        <span style={{ fontWeight: 700, color: "#6B5B4E" }}>→ Gap yang bisa kita ambil: </span>{gap}
                    </div>
                </div>
            )}
        </div>
    );
}

function FeatureBlock({ icon, title, desc, priority, details }) {
    const [open, setOpen] = useState(false);
    const prioColor = priority === "P0" ? "#C4785B" : priority === "P1" ? "#B8976B" : "#8C8078";
    return (
        <div
            style={{
                background: "#FAF8F5",
                border: "1px solid #E8E2DA",
                borderRadius: 14,
                padding: "18px 22px",
                marginBottom: 12,
                cursor: "pointer",
                transition: "all 0.2s ease",
            }}
            onClick={() => setOpen(!open)}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 22, lineHeight: 1.3 }}>{icon}</span>
                    <div>
                        <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 16.5, fontWeight: 700, color: "#2C2520" }}>{title}</div>
                        <div style={{ fontSize: 13.5, color: "#6B5B4E", marginTop: 3, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>{desc}</div>
                    </div>
                </div>
                <span style={{
                    background: prioColor + "18",
                    color: prioColor,
                    padding: "3px 10px",
                    borderRadius: 16,
                    fontSize: 12,
                    fontWeight: 700,
                    fontFamily: "'DM Sans', sans-serif",
                    whiteSpace: "nowrap",
                }}>{priority}</span>
            </div>
            {open && (
                <div style={{
                    marginTop: 14,
                    paddingTop: 14,
                    borderTop: "1px solid #E8E2DA",
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: "#4A4340",
                    fontFamily: "'DM Sans', sans-serif",
                }}>
                    {details}
                </div>
            )}
        </div>
    );
}

function PhaseCard({ phase, title, duration, items, color }) {
    return (
        <div style={{
            background: "#FAF8F5",
            border: "1px solid #E8E2DA",
            borderRadius: 14,
            padding: "20px 22px",
            marginBottom: 14,
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <span style={{
                    background: color,
                    color: "#FFF",
                    padding: "4px 12px",
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 700,
                    fontFamily: "'DM Sans', sans-serif",
                }}>{phase}</span>
                <span style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 17, fontWeight: 700, color: "#2C2520" }}>{title}</span>
                <span style={{ fontSize: 13, color: "#8C8078", fontFamily: "'DM Sans', sans-serif", marginLeft: "auto" }}>{duration}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {items.map((item, i) => (
                    <div key={i} style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: "#4A4340",
                        fontFamily: "'DM Sans', sans-serif",
                    }}>
                        <span style={{ color: color, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function NoteAppStrategy() {
    const [active, setActive] = useState("overview");

    return (
        <div style={{
            minHeight: "100vh",
            background: "#F5F1EC",
            fontFamily: "'DM Sans', sans-serif",
        }}>
            <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;600;700;900&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

            {/* Header */}
            <div style={{
                background: "#2C2520",
                padding: "40px 32px 32px",
                color: "#F5F1EC",
            }}>
                <div style={{ maxWidth: 780, margin: "0 auto" }}>
                    <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "#B8976B", marginBottom: 12 }}>
                        Product Strategy Document
                    </div>
                    <h1 style={{
                        fontFamily: "'Source Serif 4', Georgia, serif",
                        fontSize: 34,
                        fontWeight: 900,
                        margin: 0,
                        lineHeight: 1.2,
                        color: "#F5F1EC",
                    }}>
                        Catatan — Note-Taking App
                    </h1>
                    <p style={{
                        fontSize: 15.5,
                        color: "#B8A99A",
                        marginTop: 10,
                        lineHeight: 1.6,
                        maxWidth: 600,
                    }}>
                        Pengalaman menulis yang simpel, estetik, dan minim friction untuk user Indonesia. Tulisan yang enak dibaca ulang, padahal cuma catatan sehari-hari.
                    </p>
                </div>
            </div>

            {/* Nav */}
            <div style={{
                background: "#EDE8E1",
                borderBottom: "1px solid #DDD6CC",
                position: "sticky",
                top: 0,
                zIndex: 100,
                overflowX: "auto",
                WebkitOverflowScrolling: "touch",
            }}>
                <div style={{
                    maxWidth: 780,
                    margin: "0 auto",
                    display: "flex",
                    gap: 0,
                    padding: "0 16px",
                }}>
                    {sections.map((s) => (
                        <button
                            key={s}
                            onClick={() => setActive(s)}
                            style={{
                                background: active === s ? "#F5F1EC" : "transparent",
                                border: "none",
                                borderBottom: active === s ? "2px solid #C4785B" : "2px solid transparent",
                                padding: "12px 14px",
                                fontSize: 13,
                                fontWeight: active === s ? 700 : 500,
                                color: active === s ? "#2C2520" : "#8C8078",
                                cursor: "pointer",
                                whiteSpace: "nowrap",
                                fontFamily: "'DM Sans', sans-serif",
                                transition: "all 0.15s ease",
                            }}
                        >
                            <span style={{ marginRight: 5 }}>{sectionIcons[s]}</span>
                            {sectionLabels[s]}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div style={{ maxWidth: 780, margin: "0 auto", padding: "32px 24px 60px" }}>

                {/* OVERVIEW */}
                {active === "overview" && (
                    <div>
                        <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 26, fontWeight: 800, color: "#2C2520", marginBottom: 8 }}>Ringkasan Eksekutif</h2>
                        <div style={{ width: 48, height: 3, background: "#C4785B", borderRadius: 2, marginBottom: 24 }} />

                        <div style={{ fontSize: 15.5, lineHeight: 1.85, color: "#4A4340", marginBottom: 28 }}>
                            <p style={{ marginBottom: 16 }}>
                                <strong style={{ color: "#2C2520" }}>Catatan</strong> adalah note-taking app yang menggabungkan <em>reading experience</em> sekelas Medium dengan kesederhanaan interaksi ala Notion — ditargetkan spesifik untuk pasar Indonesia. Premis utamanya: user buka app, langsung nulis, dan hasilnya terasa seperti membaca artikel yang rapi, padahal itu hanya catatan sehari-hari.
                            </p>
                            <p style={{ marginBottom: 16 }}>
                                Pasar note-taking global tumbuh pesat dengan CAGR ~16-22% dan Asia-Pacific menjadi region dengan pertumbuhan tercepat. Di Indonesia sendiri, sekitar 57% pelajar sudah mengandalkan Android-based apps untuk catatan. Namun, belum ada produk lokal yang fokus pada <em>writing aesthetics</em> dengan harga yang accessible untuk kantong Indonesia.
                            </p>
                            <p>
                                Strategi MVP: build sebagai <strong>Progressive Web App (PWA)</strong> dengan Next.js + Tiptap editor, launch dalam 8-10 minggu, pricing Rp 35.000-49.000/bulan, dan onboarding yang literally zero-friction — buka, tulis, selesai.
                            </p>
                        </div>

                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: 14,
                        }}>
                            {[
                                { label: "Target Market", value: "Gen Z & Millennials ID", color: "#C4785B" },
                                { label: "Platform", value: "PWA (Web-first)", color: "#5B8C5A" },
                                { label: "Pricing", value: "Rp 35-49K/bulan", color: "#6B7BA8" },
                                { label: "MVP Timeline", value: "8-10 Minggu", color: "#B8976B" },
                            ].map((item, i) => (
                                <div key={i} style={{
                                    background: "#FAF8F5",
                                    border: "1px solid #E8E2DA",
                                    borderRadius: 12,
                                    padding: "16px 18px",
                                    borderTop: `3px solid ${item.color}`,
                                }}>
                                    <div style={{ fontSize: 12, fontWeight: 600, color: "#8C8078", letterSpacing: 0.5, marginBottom: 6 }}>{item.label}</div>
                                    <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 18, fontWeight: 700, color: "#2C2520" }}>{item.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* PROBLEM STATEMENT */}
                {active === "problem" && (
                    <div>
                        <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 26, fontWeight: 800, color: "#2C2520", marginBottom: 8 }}>Problem Statement</h2>
                        <div style={{ width: 48, height: 3, background: "#C4785B", borderRadius: 2, marginBottom: 24 }} />

                        <div style={{ fontSize: 15.5, lineHeight: 1.85, color: "#4A4340" }}>
                            <div style={{
                                background: "#2C2520",
                                color: "#F5F1EC",
                                borderRadius: 14,
                                padding: "24px 26px",
                                marginBottom: 28,
                                fontFamily: "'Source Serif 4', Georgia, serif",
                                fontSize: 17,
                                lineHeight: 1.7,
                                fontStyle: "italic",
                            }}>
                                "Orang Indonesia ingin menulis catatan yang rapi dan enak dibaca, tapi app yang ada sekarang either terlalu complex (Notion), terlalu basic (Google Keep), terlalu mahal (Bear), atau terlalu asing (Apple Notes eksklusif iOS). Tidak ada yang hit sweet spot antara <em>beautiful writing experience</em> dan <em>dead-simple interaction</em> dengan harga yang masuk akal."
                            </div>

                            <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 19, fontWeight: 700, color: "#2C2520", marginBottom: 14 }}>Pain Points yang Kami Selesaikan</h3>

                            {[
                                {
                                    pain: "Friction tinggi saat mulai menulis",
                                    detail: "Notion butuh setup workspace, buat page, pilih template. Google Keep terlalu casual — terasa kayak sticky note, bukan catatan serius. User mau: buka app → langsung nulis.",
                                },
                                {
                                    pain: "Catatan yang ditulis ga enak dibaca ulang",
                                    detail: "Catatan di most apps terlihat seperti draft — font kecil, spacing rapat, ga ada visual hierarchy. Padahal catatan yang well-formatted secara visual membuat user lebih sering revisit dan benefit dari apa yang mereka tulis.",
                                },
                                {
                                    pain: "Apps terlalu complex atau terlalu simple",
                                    detail: "Notion powerful tapi overwhelming. Google Keep simple tapi terlalu terbatas. Bear estetik tapi Apple-only dan berbahasa Inggris. Tidak ada middle ground yang accessible secara bahasa dan harga untuk user Indonesia.",
                                },
                                {
                                    pain: "Pricing ga masuk untuk market Indonesia",
                                    detail: "Notion Personal Pro ~$10/bulan (~Rp 160K), Bear Pro ~$3/bulan (Apple-only). Untuk mahasiswa atau pekerja muda di Indonesia, range Rp 35-50K/bulan jauh lebih accessible dan competitive.",
                                },
                                {
                                    pain: "Platform gap untuk user Android",
                                    detail: "Bear (Apple-only) dan Apple Notes (Apple-only) menutup akses ke 57% pelajar Indonesia yang pakai Android. Market butuh solusi cross-platform yang beautiful.",
                                },
                            ].map((item, i) => (
                                <div key={i} style={{
                                    background: "#FAF8F5",
                                    border: "1px solid #E8E2DA",
                                    borderRadius: 12,
                                    padding: "18px 22px",
                                    marginBottom: 12,
                                }}>
                                    <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 16, fontWeight: 700, color: "#C4785B", marginBottom: 6 }}>
                                        {i + 1}. {item.pain}
                                    </div>
                                    <div style={{ fontSize: 14.5, lineHeight: 1.7, color: "#4A4340" }}>{item.detail}</div>
                                </div>
                            ))}

                            <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 19, fontWeight: 700, color: "#2C2520", marginTop: 28, marginBottom: 14 }}>Target User Persona</h3>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
                                {[
                                    {
                                        name: "Rani, 23",
                                        role: "Fresh graduate, content creator",
                                        behavior: "Nulis jurnal harian, brainstorm ide konten, catat insight dari buku/podcast. Mau app yang aesthetically pleasing untuk di-screenshot dan share ke IG story.",
                                    },
                                    {
                                        name: "Dimas, 27",
                                        role: "Software engineer",
                                        behavior: "Catat meeting notes, TIL (today I learned), debugging notes. Butuh yang cepat dan ga ganggu flow kerja. Pake macOS dan Android.",
                                    },
                                    {
                                        name: "Sari, 20",
                                        role: "Mahasiswa Ekonomi",
                                        behavior: "Catat rangkuman kuliah, persiapan ujian, to-do list tugas. Budget terbatas, prioritas app yang murah tapi ga murahan tampilannya.",
                                    },
                                ].map((p, i) => (
                                    <div key={i} style={{
                                        background: "#FAF8F5",
                                        border: "1px solid #E8E2DA",
                                        borderRadius: 14,
                                        padding: "20px 22px",
                                    }}>
                                        <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 17, fontWeight: 700, color: "#2C2520" }}>{p.name}</div>
                                        <div style={{ fontSize: 13, color: "#B8976B", fontWeight: 600, marginBottom: 10 }}>{p.role}</div>
                                        <div style={{ fontSize: 14, lineHeight: 1.65, color: "#4A4340" }}>{p.behavior}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* COMPETITORS */}
                {active === "competitors" && (
                    <div>
                        <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 26, fontWeight: 800, color: "#2C2520", marginBottom: 8 }}>Analisis Kompetitor</h2>
                        <div style={{ width: 48, height: 3, background: "#C4785B", borderRadius: 2, marginBottom: 12 }} />
                        <p style={{ fontSize: 14.5, color: "#6B5B4E", marginBottom: 24, lineHeight: 1.6 }}>
                            Klik setiap kompetitor untuk melihat detail analisis dan gap yang bisa diambil.
                        </p>

                        <CompetitorCard
                            name="Notion"
                            score={7}
                            color="#2C2520"
                            pros="Block-based editor yang powerful, ekosistem lengkap (database, kanban, wiki), brand awareness tinggi di Indonesia terutama di kalangan tech-savvy."
                            cons="Overwhelming untuk simple note-taking, loading berat (Electron-based), learning curve tinggi, pricing $10/bulan terlalu mahal untuk casual user Indonesia."
                            gap="Ambil konsep block-based editing-nya tapi strip down ke essentials saja. Buat jadi ringan, cepat, dan focused ke writing — bukan workspace tool."
                        />
                        <CompetitorCard
                            name="Medium"
                            score={6}
                            color="#5B8C5A"
                            pros="Typography dan reading experience terbaik di kelasnya, layout yang clean dan lega, membuat tulisan siapapun terlihat profesional."
                            cons="Bukan note-taking app — ini publishing platform. Ga bisa dipakai untuk catatan pribadi, ga ada organisasi, ga ada offline access."
                            gap="Steal the reading/writing aesthetic, tapi bikin jadi private note-taking tool. Ini core differentiator kita: tulisan terasa seperti Medium article, tapi itu cuma catatan harian."
                        />
                        <CompetitorCard
                            name="Bear"
                            score={9}
                            color="#C4785B"
                            pros="Desain paling cantik di kategori note-taking, Markdown support excellent, tag-based organization yang intuitif, fast dan lightweight. Apple Design Award winner."
                            cons="Eksklusif Apple ecosystem — zero Android/Windows. Pricing ~$3/bulan tergolong reasonable tapi tetap Apple-only. Tidak ada web version. Bahasa hanya Inggris."
                            gap="Bear adalah benchmark terdekat dari segi visi produk. Kita perlu match level estetikanya tapi deliver ke cross-platform (web-first) dengan harga Indonesia dan feel lokal."
                        />
                        <CompetitorCard
                            name="Apple Notes"
                            score={5}
                            color="#6B7BA8"
                            pros="Gratis, terintegrasi sempurna di Apple ecosystem, scan dokumen, handwriting support, cukup capable untuk basic use."
                            cons="Apple-only (menutup akses ke mayoritas user Indonesia yang Android), desain functional tapi ga inspiring, ga bikin orang 'mau nulis' — hanya utilitarian."
                            gap="User yang pakai Apple Notes seringkali 'settle' karena gratis dan convenient. Kita bisa menarik mereka dengan pengalaman menulis yang jauh lebih indah dan cross-platform."
                        />
                        <CompetitorCard
                            name="Google Keep"
                            score={4}
                            color="#B8976B"
                            pros="Gratis, cross-platform, sync sempurna, quick capture yang cepat, terintegrasi dengan Google ecosystem."
                            cons="Terasa seperti sticky note — tidak cocok untuk catatan panjang atau writing yang serius. Zero typography control. Visual yang terlalu casual dan boxy."
                            gap="Google Keep user yang mulai serius menulis akan butuh upgrade. Kita menawarkan loncatan dari 'sticky note digital' ke 'beautiful personal writing space.'"
                        />
                        <CompetitorCard
                            name="Craft"
                            score={8}
                            color="#8B6B99"
                            pros="Block-based editor yang polished, visual yang premium, support dokumen panjang dengan baik, UI/UX salah satu yang terbaik."
                            cons="Apple-only (Mac, iPad, iPhone), pricing mulai dari gratis tapi Pro $5/bulan. Target market Western professionals, ga ada lokalisasi Asia."
                            gap="Craft membuktikan ada market untuk 'beautiful document editor.' Kita bisa bawa konsep ini ke cross-platform dengan pendekatan yang lebih simple dan harga Indonesia."
                        />

                        <div style={{
                            background: "#2C2520",
                            borderRadius: 14,
                            padding: "24px 26px",
                            marginTop: 24,
                            color: "#F5F1EC",
                        }}>
                            <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 18, fontWeight: 700, marginBottom: 12 }}>
                                ◈ Positioning Statement
                            </div>
                            <div style={{ fontSize: 15, lineHeight: 1.75, color: "#CCC4BC" }}>
                                <strong style={{ color: "#F5F1EC" }}>Catatan</strong> mengisi gap yang jelas: sebuah note-taking app dengan <em>writing aesthetic</em> sekelas Bear/Craft, accessibility cross-platform, dan harga yang masuk akal untuk pasar Indonesia. Kita bukan Notion yang stripped-down — kita adalah <em>beautiful writing companion</em> yang kebetulan punya organisasi cerdas.
                            </div>
                        </div>
                    </div>
                )}

                {/* FEATURES */}
                {active === "features" && (
                    <div>
                        <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 26, fontWeight: 800, color: "#2C2520", marginBottom: 8 }}>Core Features MVP</h2>
                        <div style={{ width: 48, height: 3, background: "#C4785B", borderRadius: 2, marginBottom: 12 }} />
                        <p style={{ fontSize: 14.5, color: "#6B5B4E", marginBottom: 8, lineHeight: 1.6 }}>
                            Prioritas: <strong style={{ color: "#C4785B" }}>P0</strong> = harus ada di launch, <strong style={{ color: "#B8976B" }}>P1</strong> = segera setelah launch, <strong style={{ color: "#8C8078" }}>P2</strong> = nice-to-have di fase awal.
                        </p>
                        <p style={{ fontSize: 13.5, color: "#8C8078", marginBottom: 24 }}>Klik setiap fitur untuk melihat detail spesifikasi.</p>

                        <FeatureBlock
                            icon="✍"
                            title="Block-Based Editor (Ringan)"
                            desc="Editor yang intuitif dengan block types essential: text, heading, bullet, numbered list, quote, divider, dan image."
                            priority="P0"
                            details={
                                <div>
                                    <p style={{ marginBottom: 10 }}>Block types yang harus ada di MVP:</p>
                                    <p style={{ marginBottom: 6 }}><strong>Text paragraph</strong> — default block, typography besar dan lega ala Medium (font-size 18-20px, line-height 1.8). Ini yang bikin tulisan enak dibaca.</p>
                                    <p style={{ marginBottom: 6 }}><strong>Heading (H1, H2, H3)</strong> — bold, clear hierarchy. H1 otomatis jadi judul note.</p>
                                    <p style={{ marginBottom: 6 }}><strong>Bullet & Numbered list</strong> — indentation 1 level cukup. Ga perlu nested complex.</p>
                                    <p style={{ marginBottom: 6 }}><strong>Quote block</strong> — styled dengan garis kiri tebal dan italic, kayak pull-quote di artikel.</p>
                                    <p style={{ marginBottom: 6 }}><strong>Divider</strong> — visual break antar section, subtle tapi jelas.</p>
                                    <p style={{ marginBottom: 6 }}><strong>Image</strong> — drag-drop atau paste, auto-resize, centered layout.</p>
                                    <p style={{ marginTop: 12 }}><strong>Inline formatting:</strong> bold, italic, strikethrough, inline code, link. Support keyboard shortcut (Cmd/Ctrl+B, dll).</p>
                                    <p style={{ marginTop: 10 }}><strong>Interaksi kunci:</strong> ketik "/" untuk command menu (ala Notion) — tapi dengan 6-8 opsi saja, bukan 50+. Enter = new block. Drag handle untuk reorder. Backspace di block kosong = delete block.</p>
                                </div>
                            }
                        />
                        <FeatureBlock
                            icon="📋"
                            title="Notes List (Homepage)"
                            desc="Halaman utama yang menampilkan semua notes dengan tampilan clean, scannable, auto-sorted by last edited."
                            priority="P0"
                            details={
                                <div>
                                    <p style={{ marginBottom: 10 }}>Dua view mode yang bisa di-toggle:</p>
                                    <p style={{ marginBottom: 6 }}><strong>Card view (default)</strong> — setiap note tampil sebagai card dengan: judul (H1 pertama), preview 2-3 baris teks pertama, tanggal last edited, dan tags jika ada. Layout grid 2 kolom di desktop, 1 kolom di mobile.</p>
                                    <p style={{ marginBottom: 6 }}><strong>List view</strong> — compact, satu baris per note. Judul + tanggal. Untuk power user yang punya banyak notes.</p>
                                    <p style={{ marginTop: 10 }}><strong>Auto-sort:</strong> by last edited (default), bisa di-toggle ke created date atau alphabetical.</p>
                                    <p style={{ marginTop: 6 }}><strong>Search:</strong> full-text search yang cepat. Ketik langsung dari homepage, results muncul real-time. Ini fitur esensial — jangan sampai user harus scroll untuk cari note.</p>
                                    <p style={{ marginTop: 6 }}><strong>Empty state:</strong> kalau belum ada note, tampilkan CTA yang warm dan inviting: "Mulai catatan pertamamu" dengan satu tombol besar.</p>
                                </div>
                            }
                        />
                        <FeatureBlock
                            icon="💾"
                            title="Auto-Save Seamless"
                            desc="Setiap perubahan tersimpan otomatis tanpa user harus memikirkannya. Zero save button."
                            priority="P0"
                            details={
                                <div>
                                    <p style={{ marginBottom: 10 }}>Implementasi auto-save yang invisible:</p>
                                    <p style={{ marginBottom: 6 }}><strong>Debounced save</strong> — setiap 1-2 detik setelah user berhenti mengetik, data tersimpan ke local storage (IndexedDB). Tidak ada tombol save, tidak ada dialog "Unsaved changes."</p>
                                    <p style={{ marginBottom: 6 }}><strong>Visual indicator</strong> — hanya subtle indicator di header: ikon kecil yang berubah dari "saving..." ke "saved" (atau checkmark). Jangan modal, jangan toast notification yang menggangu.</p>
                                    <p style={{ marginBottom: 6 }}><strong>Offline-first</strong> — semua data tersimpan lokal dulu. Kalau ada cloud sync (paid feature), sync terjadi di background. User tidak pernah "kehilangan" tulisan karena internet mati.</p>
                                    <p style={{ marginTop: 6 }}><strong>Version hint:</strong> tampilkan "Terakhir diedit: 5 menit lalu" di header note. Ini kasih confidence bahwa tulisan aman.</p>
                                </div>
                            }
                        />
                        <FeatureBlock
                            icon="🏷"
                            title="Tag-Based Organization"
                            desc="Organisasi simpel berbasis tags — flat, ga perlu folder hierarchy yang complex."
                            priority="P0"
                            details={
                                <div>
                                    <p style={{ marginBottom: 10 }}>Kenapa tags, bukan folders:</p>
                                    <p style={{ marginBottom: 6 }}>Folders memaksa user berpikir "ini note masuk kategori mana?" sebelum mulai menulis — itu friction. Tags bersifat opsional dan bisa ditambahkan kapan saja, bahkan setelah note selesai. Satu note bisa punya multiple tags.</p>
                                    <p style={{ marginTop: 10 }}><strong>Cara kerja:</strong></p>
                                    <p style={{ marginBottom: 6 }}>• Ketik #namatag di mana saja dalam note = auto-detect sebagai tag</p>
                                    <p style={{ marginBottom: 6 }}>• Tag picker di footer/header note untuk add tanpa harus ketik di body</p>
                                    <p style={{ marginBottom: 6 }}>• Sidebar menampilkan semua tags yang pernah dipakai, klik = filter notes</p>
                                    <p style={{ marginBottom: 6 }}>• Suggested tags berdasarkan konten (future enhancement)</p>
                                    <p style={{ marginTop: 10 }}><strong>Limit:</strong> di MVP, cukup flat tags (ga perlu nested). Warna tag auto-assigned dari palette pastel earthy supaya konsisten.</p>
                                </div>
                            }
                        />
                        <FeatureBlock
                            icon="🌗"
                            title="Dark Mode & Light Mode"
                            desc="Dual theme dengan palette pastel earthy yang nyaman di mata di kedua mode."
                            priority="P0"
                            details={
                                <div>
                                    <p style={{ marginBottom: 10 }}><strong>Light mode:</strong> background warm off-white (#FAF8F5 atau #F5F1EC), teks dark brown (#2C2520), accent earthy terracotta dan sage green. Bukan pure white — terlalu harsh.</p>
                                    <p style={{ marginBottom: 10 }}><strong>Dark mode:</strong> background deep warm charcoal (#1E1B18 atau #232019), teks warm light (#E8E2DA). Bukan pure black — harus tetap warm. Accent colors di-adjust supaya contrast-nya tetap readable.</p>
                                    <p style={{ marginBottom: 6 }}><strong>Auto-detect:</strong> ikuti system preference by default, tapi user bisa override.</p>
                                    <p style={{ marginTop: 6 }}><strong>Kunci:</strong> kedua mode harus terasa cohesive, bukan afterthought. Typography, spacing, dan color semua harus ditest di kedua mode. Ini bukan cuma invert warna — ini dua palette yang deliberately designed.</p>
                                </div>
                            }
                        />
                        <FeatureBlock
                            icon="📱"
                            title="Responsive Mobile-First"
                            desc="Pengalaman yang equally great di mobile dan desktop. Orang sering catat dari HP."
                            priority="P0"
                            details={
                                <div>
                                    <p style={{ marginBottom: 10 }}>Di Indonesia, mobile usage sangat dominan. App harus mobile-first:</p>
                                    <p style={{ marginBottom: 6 }}><strong>Mobile:</strong> full-screen editor, toolbar di bottom (thumb-friendly), swipe gestures (swipe kiri = delete, swipe kanan = back), font-size bisa di-adjust.</p>
                                    <p style={{ marginBottom: 6 }}><strong>Desktop:</strong> sidebar navigation, keyboard shortcuts, wider reading column (max-width 680-720px ala Medium).</p>
                                    <p style={{ marginBottom: 6 }}><strong>Tablet:</strong> hybrid — sidebar bisa di-collapse, reading area lega.</p>
                                    <p style={{ marginTop: 10 }}><strong>PWA benefits:</strong> bisa di-"install" ke homescreen (Android & iOS), offline access, push notifications (untuk reminders di future), feel native tanpa perlu download dari app store.</p>
                                </div>
                            }
                        />
                        <FeatureBlock
                            icon="🔤"
                            title="Typography System Premium"
                            desc="Font selection dan sizing yang bikin catatan terasa seperti artikel Medium — bukan dokumen Word."
                            priority="P1"
                            details={
                                <div>
                                    <p style={{ marginBottom: 10 }}>Typography adalah hero feature yang bikin app ini berbeda:</p>
                                    <p style={{ marginBottom: 6 }}><strong>Default font pair:</strong> heading dengan serif yang bold (seperti Source Serif, Playfair Display, atau Lora), body dengan clean sans-serif (seperti DM Sans, Nunito, atau Plus Jakarta Sans — font yang punya karakter tapi tetap readable).</p>
                                    <p style={{ marginBottom: 6 }}><strong>Font size:</strong> body minimal 18px, heading H1 minimal 32px. Line-height 1.7-1.8. Paragraph spacing generous.</p>
                                    <p style={{ marginBottom: 6 }}><strong>Reading width:</strong> max 680px (sama seperti Medium). Ini sweet spot untuk comfortable reading — tidak terlalu lebar, tidak terlalu sempit.</p>
                                    <p style={{ marginTop: 10 }}><strong>Paid feature:</strong> user bisa pilih dari 4-5 font pair presets (Classic, Modern, Warm, Technical, Indonesian). Plus Jakarta Sans bisa jadi pilihan menarik karena ini typeface yang di-design oleh designer Indonesia.</p>
                                </div>
                            }
                        />
                        <FeatureBlock
                            icon="📤"
                            title="Export Options"
                            desc="Kemampuan export note ke format lain: Markdown, PDF, plain text."
                            priority="P1"
                            details={
                                <div>
                                    <p style={{ marginBottom: 10 }}>Export penting untuk mengurangi lock-in anxiety:</p>
                                    <p style={{ marginBottom: 6 }}><strong>Free tier:</strong> Copy as plain text, share via link (read-only).</p>
                                    <p style={{ marginBottom: 6 }}><strong>Paid tier:</strong> Export as Markdown (.md), Export as PDF (dengan typography yang sama cantiknya), Export as HTML, Bulk export semua notes.</p>
                                    <p style={{ marginTop: 6 }}>Export PDF harus tetap mempertahankan visual quality — ini juga jadi selling point: "Catatan lo bisa langsung jadi dokumen yang presentable."</p>
                                </div>
                            }
                        />
                        <FeatureBlock
                            icon="☁️"
                            title="Cloud Sync"
                            desc="Sinkronisasi antar device — tulis di HP, lanjut di laptop."
                            priority="P1"
                            details={
                                <div>
                                    <p style={{ marginBottom: 10 }}>Cloud sync sebagai paid feature utama:</p>
                                    <p style={{ marginBottom: 6 }}><strong>Free tier:</strong> local-only (data tersimpan di browser/device). Sudah sangat usable untuk single-device user.</p>
                                    <p style={{ marginBottom: 6 }}><strong>Paid tier:</strong> real-time sync via cloud. Conflict resolution yang smart (last-write-wins dengan merge attempt).</p>
                                    <p style={{ marginTop: 6 }}>Ini natural upgrade path: user mulai gratis di satu device, lalu butuh sync ketika mulai pakai di device kedua. Trigger upgrade yang organik.</p>
                                </div>
                            }
                        />
                        <FeatureBlock
                            icon="⌨️"
                            title="Keyboard Shortcuts & Markdown Shortcuts"
                            desc="Power-user bisa pakai shortcuts tanpa angkat tangan dari keyboard."
                            priority="P2"
                            details={
                                <div>
                                    <p style={{ marginBottom: 6 }}><strong>Markdown shortcuts (inline):</strong> ketik &quot;# &quot; = H1, &quot;## &quot; = H2, &quot;- &quot; = bullet, &quot;{`>`} &quot; = quote, &quot;---&quot; = divider. Ini membuat nulis terasa effortless buat yang sudah familiar.</p>
                                    <p style={{ marginBottom: 6 }}><strong>Keyboard shortcuts:</strong> Cmd+B = bold, Cmd+I = italic, Cmd+K = link, Cmd+Shift+H = highlight (kalau ada), Cmd+N = new note, Cmd+P = search.</p>
                                    <p style={{ marginTop: 6 }}>Tidak wajib dipelajari — app tetap fully usable tanpa satu shortcut pun. Ini hanya bonus untuk power users.</p>
                                </div>
                            }
                        />
                    </div>
                )}

                {/* ARCHITECTURE */}
                {active === "architecture" && (
                    <div>
                        <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 26, fontWeight: 800, color: "#2C2520", marginBottom: 8 }}>Arsitektur & Tech Stack</h2>
                        <div style={{ width: 48, height: 3, background: "#C4785B", borderRadius: 2, marginBottom: 24 }} />

                        <div style={{ fontSize: 15.5, lineHeight: 1.85, color: "#4A4340", marginBottom: 28 }}>
                            <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 19, fontWeight: 700, color: "#2C2520", marginBottom: 12 }}>Kenapa PWA, Bukan Native?</h3>
                            <p style={{ marginBottom: 16 }}>
                                Keputusan platform ini critical. Berikut reasoning-nya:
                            </p>

                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14, marginBottom: 28 }}>
                                <div style={{ background: "#FAF8F5", border: "1px solid #E8E2DA", borderRadius: 14, padding: "20px 22px" }}>
                                    <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 16, fontWeight: 700, color: "#5B8C5A", marginBottom: 10 }}>✓ PWA (Rekomendasi)</div>
                                    <div style={{ fontSize: 14, lineHeight: 1.7, color: "#4A4340" }}>
                                        Satu codebase untuk semua platform. Bisa "install" di Android dan iOS homescreen. Offline-capable via Service Worker. Tidak perlu review App Store. Update instant. Development cost 60-70% lebih rendah dari native. Bisa iterasi cepat. Di Indonesia, Chrome mendominasi — PWA support excellent.
                                    </div>
                                </div>
                                <div style={{ background: "#FAF8F5", border: "1px solid #E8E2DA", borderRadius: 14, padding: "20px 22px" }}>
                                    <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 16, fontWeight: 700, color: "#C4785B", marginBottom: 10 }}>✗ Native (Nanti)</div>
                                    <div style={{ fontSize: 14, lineHeight: 1.7, color: "#4A4340" }}>
                                        Perlu develop dan maintain iOS + Android + Web = 3 codebase (atau React Native/Flutter). Butuh tim lebih besar. App Store review memperlamban iterasi. Biaya development 3-5x lebih tinggi. Cocok setelah product-market fit tercapai dan revenue sudah sustain.
                                    </div>
                                </div>
                            </div>

                            <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 19, fontWeight: 700, color: "#2C2520", marginBottom: 14 }}>Rekomendasi Tech Stack</h3>

                            {[
                                {
                                    layer: "Frontend Framework",
                                    choice: "Next.js 15 (App Router)",
                                    why: "SSR/SSG untuk landing page (SEO), client-side app untuk editor. React ecosystem mature, banyak talent di Indonesia. Vercel hosting gratis untuk tier awal.",
                                },
                                {
                                    layer: "Editor Engine",
                                    choice: "Tiptap (berbasis ProseMirror)",
                                    why: "Block-based editor yang paling mature di ecosystem web. Headless — kita full control atas UI/styling. Extensible, keyboard shortcuts built-in, collaborative editing ready untuk future. Notion, GitBook, dan banyak editor modern pakai ProseMirror di bawahnya.",
                                },
                                {
                                    layer: "Styling",
                                    choice: "Tailwind CSS + CSS Variables",
                                    why: "Rapid development, consistent design tokens via CSS variables untuk theming (light/dark mode). Purge unused CSS = bundle kecil. Utility-first cocok untuk responsive design.",
                                },
                                {
                                    layer: "Local Storage",
                                    choice: "IndexedDB (via Dexie.js)",
                                    why: "Offline-first storage yang performant. Dexie.js menyederhanakan IndexedDB API. Data tetap aman meskipun browser ditutup. Ini backbone untuk auto-save dan offline access.",
                                },
                                {
                                    layer: "Backend / Auth",
                                    choice: "Supabase",
                                    why: "PostgreSQL database, authentication (email + Google OAuth), real-time subscriptions, storage untuk image upload. Free tier generous (50K MAU auth, 500MB DB). Cocok untuk MVP yang butuh cepat launch. Prisma juga bisa jadi opsi ORM di atasnya.",
                                },
                                {
                                    layer: "Cloud Sync",
                                    choice: "Supabase Realtime + CRDT (future)",
                                    why: "Untuk MVP, simple last-write-wins sync via Supabase. Untuk future, bisa adopt Y.js (CRDT) untuk conflict-free sync yang lebih robust. CRDT juga jadi fondasi kalau nanti mau tambah collaboration.",
                                },
                                {
                                    layer: "Image Storage",
                                    choice: "Supabase Storage / Cloudflare R2",
                                    why: "User upload gambar ke note → compress client-side → upload ke object storage. Cloudflare R2 zero egress cost, cocok untuk budget-conscious. Supabase Storage lebih simple untuk integrasi awal.",
                                },
                                {
                                    layer: "Hosting & CDN",
                                    choice: "Vercel + Cloudflare",
                                    why: "Vercel untuk Next.js hosting (free tier generous, auto-deploy dari Git). Cloudflare untuk CDN dan edge caching. Keduanya punya PoP di Asia yang memastikan latency rendah untuk user Indonesia.",
                                },
                                {
                                    layer: "Analytics",
                                    choice: "PostHog / Umami",
                                    why: "PostHog untuk product analytics (funnel, retention, feature usage) — self-hostable. Umami untuk web analytics yang privacy-friendly. Keduanya bisa self-host untuk cost efficiency.",
                                },
                            ].map((item, i) => (
                                <div key={i} style={{
                                    display: "flex",
                                    gap: 16,
                                    marginBottom: 14,
                                    background: "#FAF8F5",
                                    border: "1px solid #E8E2DA",
                                    borderRadius: 12,
                                    padding: "16px 20px",
                                }}>
                                    <div style={{ minWidth: 140 }}>
                                        <div style={{ fontSize: 12, fontWeight: 600, color: "#8C8078", letterSpacing: 0.3 }}>{item.layer}</div>
                                        <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 15, fontWeight: 700, color: "#2C2520", marginTop: 4 }}>{item.choice}</div>
                                    </div>
                                    <div style={{ fontSize: 13.5, lineHeight: 1.65, color: "#4A4340", borderLeft: "2px solid #E8E2DA", paddingLeft: 16 }}>
                                        {item.why}
                                    </div>
                                </div>
                            ))}

                            <div style={{
                                background: "#2C2520",
                                borderRadius: 14,
                                padding: "22px 24px",
                                marginTop: 24,
                                color: "#F5F1EC",
                            }}>
                                <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 16, fontWeight: 700, marginBottom: 10 }}>
                                    💡 Estimasi Cost MVP (per bulan)
                                </div>
                                <div style={{ fontSize: 14, lineHeight: 1.7, color: "#CCC4BC" }}>
                                    Vercel (free tier) + Supabase (free tier) + Cloudflare R2 (~$0-5) + Domain (~$12/tahun) = <strong style={{ color: "#F5F1EC" }}>total ~$5-15/bulan</strong> untuk fase awal dengan 0-1000 user. Sangat lean. Biaya baru scale signifikan setelah ribuan active user.
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ONBOARDING */}
                {active === "onboarding" && (
                    <div>
                        <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 26, fontWeight: 800, color: "#2C2520", marginBottom: 8 }}>Zero-Friction Onboarding</h2>
                        <div style={{ width: 48, height: 3, background: "#C4785B", borderRadius: 2, marginBottom: 24 }} />

                        <div style={{ fontSize: 15.5, lineHeight: 1.85, color: "#4A4340" }}>
                            <p style={{ marginBottom: 20 }}>
                                Prinsip utama: <strong style={{ color: "#2C2520" }}>waktu dari buka app sampai mulai menulis harus di bawah 10 detik.</strong> Setiap langkah tambahan sebelum user bisa menulis adalah titik di mana kita kehilangan user. Berikut strateginya:
                            </p>

                            <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 19, fontWeight: 700, color: "#2C2520", marginBottom: 14 }}>Flow Onboarding</h3>

                            {[
                                {
                                    step: "1",
                                    title: "Landing Page → Try Now (tanpa sign up)",
                                    desc: "User klik 'Mulai Menulis' di landing page dan langsung masuk ke editor. TANPA registration. Data disimpan di local storage browser. Ini menghilangkan barrier terbesar: pembuatan akun. User merasakan app dulu, baru kita minta sign up nanti.",
                                    time: "0 detik",
                                },
                                {
                                    step: "2",
                                    title: "Langsung di Editor — No Tutorial",
                                    desc: "Tidak ada tour, tidak ada tooltip walkthrough, tidak ada modal welcome. Halaman pertama yang user lihat adalah editor kosong yang sudah siap diketik, dengan placeholder text yang warm: 'Mulai menulis di sini...' dan subtle hint di bawah: 'Ketik / untuk melihat opsi block'. Itu saja.",
                                    time: "3 detik",
                                },
                                {
                                    step: "3",
                                    title: "Gentle Nudge untuk Sign Up (setelah value moment)",
                                    desc: "Setelah user menulis 2-3 notes (value moment tercapai), tampilkan non-intrusive banner: 'Simpan catatanmu dengan aman — buat akun gratis.' Sign up via Google OAuth (1-tap) atau email. Jangan paksa — ini soft suggestion. Data local otomatis merge ke akun baru.",
                                    time: "Setelah beberapa hari",
                                },
                                {
                                    step: "4",
                                    title: "Progressive Disclosure",
                                    desc: "Fitur-fitur lain (tags, dark mode, export) ditemukan secara natural saat user explore. Tidak ada fitur dump di awal. Setiap fitur terasa seperti 'bonus surprise' yang ditemukan organik, bukan instruction manual yang harus dipelajari.",
                                    time: "Ongoing",
                                },
                            ].map((item, i) => (
                                <div key={i} style={{
                                    display: "flex",
                                    gap: 16,
                                    marginBottom: 16,
                                    background: "#FAF8F5",
                                    border: "1px solid #E8E2DA",
                                    borderRadius: 14,
                                    padding: "20px 22px",
                                }}>
                                    <div style={{
                                        width: 40,
                                        height: 40,
                                        background: "#C4785B",
                                        color: "#FFF",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontWeight: 700,
                                        fontSize: 16,
                                        flexShrink: 0,
                                    }}>
                                        {item.step}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                                            <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 16.5, fontWeight: 700, color: "#2C2520" }}>{item.title}</div>
                                            <span style={{ fontSize: 12, color: "#B8976B", fontWeight: 600, whiteSpace: "nowrap", marginLeft: 12 }}>{item.time}</span>
                                        </div>
                                        <div style={{ fontSize: 14.5, lineHeight: 1.7, color: "#4A4340" }}>{item.desc}</div>
                                    </div>
                                </div>
                            ))}

                            <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 19, fontWeight: 700, color: "#2C2520", marginTop: 28, marginBottom: 14 }}>Anti-Patterns yang Harus Dihindari</h3>
                            <div style={{ background: "#FAF8F5", border: "1px solid #E8E2DA", borderRadius: 14, padding: "20px 22px" }}>
                                {[
                                    "Jangan paksa sign up sebelum user bisa coba app",
                                    "Jangan tampilkan tutorial/walkthrough/tour di kunjungan pertama",
                                    "Jangan minta user pilih 'use case' atau 'template' sebelum mulai",
                                    "Jangan tampilkan pricing page sebelum user merasakan value",
                                    "Jangan buat email verification blocking — kalau pakai email sign up, biarkan user langsung masuk, verify later",
                                    "Jangan tampilkan semua fitur sekaligus — progressive disclosure",
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, fontSize: 14.5, color: "#4A4340", lineHeight: 1.6 }}>
                                        <span style={{ color: "#C4785B", fontWeight: 700, flexShrink: 0 }}>✗</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* MONETIZATION */}
                {active === "monetization" && (
                    <div>
                        <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 26, fontWeight: 800, color: "#2C2520", marginBottom: 8 }}>Strategi Monetisasi</h2>
                        <div style={{ width: 48, height: 3, background: "#C4785B", borderRadius: 2, marginBottom: 24 }} />

                        <div style={{ fontSize: 15.5, lineHeight: 1.85, color: "#4A4340" }}>
                            <p style={{ marginBottom: 24 }}>
                                Model freemium dengan batas yang generous di free tier — supaya user benar-benar merasakan value sebelum diminta bayar. Upgrade trigger harus terasa natural, bukan artificial paywall.
                            </p>

                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 28 }}>
                                {/* Free Tier */}
                                <div style={{
                                    background: "#FAF8F5",
                                    border: "2px solid #E8E2DA",
                                    borderRadius: 16,
                                    padding: "24px 22px",
                                }}>
                                    <div style={{ fontSize: 12, fontWeight: 700, color: "#8C8078", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>Free</div>
                                    <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 28, fontWeight: 900, color: "#2C2520", marginBottom: 4 }}>Rp 0</div>
                                    <div style={{ fontSize: 13, color: "#8C8078", marginBottom: 16 }}>Selamanya gratis</div>
                                    {[
                                        "Sampai 50 notes",
                                        "Block editor lengkap",
                                        "Auto-save lokal",
                                        "Tags (sampai 10 tags)",
                                        "Light & Dark mode",
                                        "1 font pair preset",
                                        "Export plain text",
                                    ].map((f, i) => (
                                        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6, fontSize: 14, color: "#4A4340" }}>
                                            <span style={{ color: "#5B8C5A" }}>✓</span> {f}
                                        </div>
                                    ))}
                                </div>

                                {/* Pro Tier */}
                                <div style={{
                                    background: "#2C2520",
                                    border: "2px solid #C4785B",
                                    borderRadius: 16,
                                    padding: "24px 22px",
                                    color: "#F5F1EC",
                                }}>
                                    <div style={{ fontSize: 12, fontWeight: 700, color: "#C4785B", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>Pro</div>
                                    <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 28, fontWeight: 900, marginBottom: 4 }}>Rp 39.000</div>
                                    <div style={{ fontSize: 13, color: "#8C8078", marginBottom: 16 }}>per bulan / Rp 349.000 per tahun</div>
                                    {[
                                        "Unlimited notes",
                                        "Cloud sync antar device",
                                        "Unlimited tags",
                                        "5 font pair presets",
                                        "Export: MD, PDF, HTML",
                                        "Custom accent colors",
                                        "Image upload (2GB storage)",
                                        "Priority support",
                                    ].map((f, i) => (
                                        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6, fontSize: 14, color: "#CCC4BC" }}>
                                            <span style={{ color: "#C4785B" }}>✓</span> {f}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 19, fontWeight: 700, color: "#2C2520", marginBottom: 14 }}>Natural Upgrade Triggers</h3>
                            <div style={{ background: "#FAF8F5", border: "1px solid #E8E2DA", borderRadius: 14, padding: "20px 22px", marginBottom: 20 }}>
                                {[
                                    { trigger: "Limit 50 notes tercapai", response: "Soft banner: 'Kamu sudah punya 50 catatan! Upgrade ke Pro untuk unlimited.' Jangan block pembuatan note baru — biarkan user tetap bisa nulis tapi tampilkan reminder." },
                                    { trigger: "User coba buka di device kedua", response: "Halaman menjelaskan bahwa sync memerlukan akun Pro. Ini trigger yang paling natural dan high-intent." },
                                    { trigger: "User coba export ke PDF", response: "Preview PDF-nya ditampilkan (watermarked), lalu CTA untuk unlock full export dengan Pro." },
                                    { trigger: "User sudah aktif 14+ hari", response: "In-app banner yang personalized: 'Kamu sudah nulis X catatan dalam 2 minggu — Catatan Pro bikin pengalaman menulismu makin keren.'" },
                                ].map((item, i) => (
                                    <div key={i} style={{ marginBottom: i < 3 ? 14 : 0 }}>
                                        <div style={{ fontSize: 14, fontWeight: 700, color: "#C4785B", marginBottom: 3 }}>{item.trigger}</div>
                                        <div style={{ fontSize: 14, lineHeight: 1.65, color: "#4A4340" }}>{item.response}</div>
                                    </div>
                                ))}
                            </div>

                            <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 19, fontWeight: 700, color: "#2C2520", marginBottom: 14 }}>Pricing Rationale</h3>
                            <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "#4A4340", marginBottom: 10 }}>
                                <strong>Rp 39.000/bulan</strong> dipilih karena: lebih murah dari Notion Pro (~Rp 160K), competitive dengan harga langganan digital populer di Indonesia (Spotify Rp 54.9K, Netflix Mobile Rp 65K), dan di atas psikologis "terlalu murah untuk dianggap serius" tapi di bawah "mikir dua kali." Opsi yearly Rp 349.000 (~Rp 29K/bulan) memberi saving 25% dan mengurangi churn.
                            </p>
                            <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "#4A4340" }}>
                                <strong>Payment gateway:</strong> Midtrans atau Xendit (lokal Indonesia) untuk support GoPay, OVO, bank transfer, kartu kredit. Ini critical — banyak user Indonesia ga punya kartu kredit internasional.
                            </p>
                        </div>
                    </div>
                )}

                {/* ROADMAP */}
                {active === "roadmap" && (
                    <div>
                        <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 26, fontWeight: 800, color: "#2C2520", marginBottom: 8 }}>MVP Roadmap</h2>
                        <div style={{ width: 48, height: 3, background: "#C4785B", borderRadius: 2, marginBottom: 24 }} />

                        <div style={{ fontSize: 15.5, lineHeight: 1.85, color: "#4A4340", marginBottom: 24 }}>
                            <p>Timeline total dari mulai development sampai public launch: <strong>8-10 minggu</strong> untuk solo developer atau tim kecil (1-2 orang). Berikut breakdown per fase:</p>
                        </div>

                        <PhaseCard
                            phase="FASE 1"
                            title="Foundation"
                            duration="Minggu 1-2"
                            color="#C4785B"
                            items={[
                                "Setup project Next.js + Tailwind + Tiptap editor",
                                "Design system: color tokens, typography scale, spacing, components dasar (button, input, card)",
                                "Implementasi Tiptap editor dengan block types: paragraph, H1-H3, bullet, numbered list, quote, divider",
                                "Auto-save ke IndexedDB (Dexie.js) — setiap perubahan tersimpan otomatis",
                                "Dark mode & Light mode dengan CSS variables",
                                "Responsive layout: mobile-first, desktop sidebar",
                            ]}
                        />
                        <PhaseCard
                            phase="FASE 2"
                            title="Core Experience"
                            duration="Minggu 3-4"
                            color="#5B8C5A"
                            items={[
                                "Notes list homepage — card view & list view",
                                "Search functionality (full-text search lokal)",
                                "Tag system — create, assign, filter by tag",
                                "Slash command menu (/) untuk block selection",
                                "Image upload & embedding dalam note",
                                "Keyboard shortcuts & Markdown shortcuts",
                                "Typography fine-tuning — memastikan reading experience premium",
                            ]}
                        />
                        <PhaseCard
                            phase="FASE 3"
                            title="Polish & Auth"
                            duration="Minggu 5-6"
                            color="#6B7BA8"
                            items={[
                                "Supabase integration: auth (Google OAuth + email)",
                                "Cloud sync untuk logged-in user (basic implementation)",
                                "Local-to-cloud data migration saat user sign up",
                                "PWA setup: manifest, service worker, offline caching",
                                "Animasi & micro-interactions (page transitions, save indicator, block creation)",
                                "Accessibility audit (keyboard navigation, screen reader, contrast)",
                                "Performance optimization — target Lighthouse score 90+",
                            ]}
                        />
                        <PhaseCard
                            phase="FASE 4"
                            title="Monetisasi & Landing"
                            duration="Minggu 7-8"
                            color="#B8976B"
                            items={[
                                "Landing page yang compelling (value prop, screenshots, testimonials placeholder)",
                                "Pricing page dengan free vs pro comparison",
                                "Payment integration (Midtrans/Xendit) — subscription flow",
                                "Free tier limits implementation (50 notes, 10 tags)",
                                "Export features (Markdown, PDF, plain text)",
                                "Upgrade nudges di trigger points yang tepat",
                            ]}
                        />
                        <PhaseCard
                            phase="FASE 5"
                            title="Launch & Iterate"
                            duration="Minggu 9-10"
                            color="#8B6B99"
                            items={[
                                "Private beta dengan 20-50 user (teman, komunitas, Twitter/X)",
                                "Bug fixing & UX refinement berdasarkan feedback",
                                "Analytics setup (PostHog/Umami) untuk track usage patterns",
                                "SEO optimization untuk landing page",
                                "Public launch — share ke ProductHunt, Twitter/X, komunitas tech ID",
                                "Content marketing: blog post tentang philosophy di balik app",
                            ]}
                        />

                        <div style={{
                            background: "#2C2520",
                            borderRadius: 14,
                            padding: "24px 26px",
                            marginTop: 24,
                            color: "#F5F1EC",
                        }}>
                            <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 18, fontWeight: 700, marginBottom: 12 }}>
                                🚀 Post-MVP Roadmap (Setelah Launch)
                            </div>
                            <div style={{ fontSize: 14.5, lineHeight: 1.75, color: "#CCC4BC" }}>
                                <p style={{ marginBottom: 8 }}><strong style={{ color: "#F5F1EC" }}>Bulan 2-3:</strong> Custom themes & font pairs, note pinning, trash/archive, rich link preview</p>
                                <p style={{ marginBottom: 8 }}><strong style={{ color: "#F5F1EC" }}>Bulan 4-6:</strong> Table block, code block, checklist block, note linking, weekly review/recap</p>
                                <p style={{ marginBottom: 8 }}><strong style={{ color: "#F5F1EC" }}>Bulan 6-12:</strong> Collaboration (share note read-only), Web clipper, widget mobile, template gallery</p>
                                <p><strong style={{ color: "#F5F1EC" }}>Tahun 2+:</strong> AI summarization, native app (jika revenue sustain), API publik, community templates</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
