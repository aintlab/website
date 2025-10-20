import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'FLTrans-Net: Transformer-based feature learning network for wheat head detection',
    img_url: "img/wheat.jpg",
    doi: "https://doi.org/10.1016/j.compag.2024.109706",
    outlet: "Published in Computers and Electronics in Agriculture (2025) - SCIE (Q1); IF=8.9; Rank=2/94; IF(%)=1.6%.",
    description: (
      <>
      <ul>
        <li><strong>Data:</strong> Wheat-field images with overlapping small spikes, complex backgrounds; multi-scale visual features for detection.</li>
        <li><strong>Intelligence:</strong> FLTrans-Net: transformer-based multi-scale fusion, spatial attention, and lightweight RetinaNet for noise-robust feature learning.</li>
        <li><strong>Applications:</strong> Real-time wheat-head detection for yield assessment and field management on resource-constrained devices.</li>
      </ul>
      </>
    ),
  },
  {
    title: 'AE-BPNN: autoencoder and backpropagation neural network-based model for lithium-ion battery state of health estimation',
    img_url: "img/battery.png",
    doi: "https://doi.org/10.1038/s41598-025-12771-4",
    outlet: "Published in Scientific Reports (2025) - SCIE (Q1); IF=3.9; Rank=25/136; IF(%)=18.0%.",
    description: (
      <>
        <ul>
          <li><strong>Data:</strong> EIS measurements from Li-ion cells across multiple temperatures and operating states.</li>
          <li><strong>Intelligence:</strong> AE-BPNN with SCG/RBP optimization for feature reduction and SOH estimation.</li>
          <li><strong>Applications:</strong> Accurate battery State-of-Health prediction for energy storage systems.</li>
        </ul>

      </>
    ),
  },
  {
    title: 'Tweeting Circular Economy: Unveiling Current Discourse Through Natural Language Processing',
    img_url: "img/circulareconomy.jpg",
    doi: "https://doi.org/10.1002/sd.3323",
    outlet: "Published in Sustainable Development (2025) - SSCI (Q1); IF=9.9; Rank=1/63; IF(%)=0.8%.",
    description: (
      <>       
      <ul>
        <li><strong>Data:</strong> 389k Twitter posts on circular economy (CE) (2012–2022).</li>
        <li><strong>Intelligence:</strong> NLP-based theme extraction and trend analysis.</li>
        <li><strong>Applications:</strong> Public insight for CE policy and stakeholder engagement.</li>
      </ul>
      </>
    ),
  },
  
];

function Feature({img_url, doi, title, outlet, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={img_url}/>
      </div>
      <div className="padding-horiz--md">
        <h3 className="text--center"><a href={doi} target="_blank" rel="noopener noreferrer">
        {title}
        </a>
        </h3>
        <p>{description}<em>{outlet}</em></p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className="text--center">Featured Research</h1>
        <p className="text--center"><em>Our work has been published in reputable peer-reviewed journals. Featured publications are shown below — <a href="/publications" target="_blank" rel="noopener noreferrer">view the full list here.</a></em></p>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <hr className="fade-divider"/>
      </div>
    </section>
  );
}
