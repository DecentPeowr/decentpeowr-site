import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Decent Peowr DAO — Decentralized People's Power</title>
        <meta name="description" content="Decent Peowr DAO — acquiring and running electric utilities at true operational cost." />
        <meta property="og:title" content="Decent Peowr DAO — Decentralized People's Power" />
        <meta property="og:description" content="Acquiring & operating electric utilities at true operational cost. Join waitlist." />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main style={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',background:'#050506',color:'#fff'}}>
        <header style={{width:'100%',background:'#070708',padding:'18px 0',boxShadow:'inset 0 -1px 0 rgba(255,255,255,0.02)'}}>
          <div style={{maxWidth:1100,margin:'0 auto',display:'flex',alignItems:'center',gap:16,padding:'0 20px'}}>
            <div style={{width:64,height:64,display:'grid',placeItems:'center',borderRadius:12, background:'linear-gradient(135deg,#00b894,#00e5a8)',color:'#042017',fontWeight:800}}>PE</div>
            <div>
              <div style={{fontWeight:700,fontSize:18}}>Decent Peowr DAO</div>
              <div style={{fontSize:12,color:'#9aa0a6'}}>Community-owned electric utilities</div>
            </div>
          </div>
        </header>

        {/* wide banner */}
        <section style={{width:'100%',display:'flex',justifyContent:'center',padding:'36px 12px'}}>
          <div style={{maxWidth:1100, width:'100%', background:'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))', borderRadius:14, padding:28, boxShadow:'0 10px 30px rgba(0,0,0,0.6)'}}>
            <div style={{display:'flex',alignItems:'center',gap:24,flexDirection:'column',textAlign:'center'}}>
              <h1 style={{margin:0,fontSize:36,lineHeight:1.02}}>Decent Peowr DAO</h1>
              <p style={{color:'#9aa0a6',maxWidth:820}}>Decentralized People's Power — finally decent. We acquire regulated electric utilities and operate them at true operational cost, transparently and community-governed.</p>

              <div style={{display:'flex',gap:12,marginTop:18,flexWrap:'wrap',justifyContent:'center'}}>
                <a href="/whitepaper" style={{padding:'10px 16px',borderRadius:10,background:'linear-gradient(90deg,#00e5a8,#00b894)',color:'#042017',fontWeight:700,textDecoration:'none'}}>Whitepaper</a>
                <a href="/#waitlist" style={{padding:'10px 16px',borderRadius:10,border:'1px solid rgba(255,255,255,0.06)',color:'#fff',textDecoration:'none'}}>Join waitlist</a>
              </div>

              <div style={{marginTop:16,color:'#9aa0a6',fontSize:13}}>Treasury dashboard → coming soon • $DECENT governance token → coming soon • First grid acquisition → coming soon</div>
            </div>
          </div>
        </section>

        <footer style={{marginTop:28,padding:'18px 0',width:'100%',textAlign:'center',color:'#6d7276'}}>
          © {new Date().getFullYear()} Decent Peowr DAO
        </footer>
      </main>
    </>
  );
}
