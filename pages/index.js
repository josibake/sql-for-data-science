import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>  
    <style>{`
      body {
        font-family: Roboto, sans-serif;
        margin: 0;
        padding: 40px;
        background: #e2e1e0;
      }
      
      `}
    </style>
    <div className='.container'>
      <h2> hi norfolk data sci </h2>
    </div>
  </div>
)