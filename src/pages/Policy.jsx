import React from 'react';

const Policy = () => {
  return (
    <div className="resource-page">
      <div className="resource-page-header">
        <h1>Content Policy</h1>
        <p>Our rules and guidelines for user content</p>
      </div>
      
      <div className="resource-page-content">
        <section className="about-section">
          <h2>MatrixAgora Content Policy</h2>
          <p>
            MatrixAgora is a platform for communities to discuss, connect, and share in an open environment. 
            The following content policy outlines what we do and don't allow on our platform.
          </p>
          
          <h3>Rules</h3>
          <ol>
            <li>
              <strong>Rule 1: Remember the human</strong>
              <p>MatrixAgora is a place for creating community and belonging, not for attacking marginalized or vulnerable groups of people. Everyone has a right to use MatrixAgora free of harassment, bullying, and threats of violence.</p>
            </li>
            
            <li>
              <strong>Rule 2: Abide by community rules</strong>
              <p>Post authentic content into communities where you have a personal interest, and do not cheat or engage in content manipulation (including spamming, vote manipulation, ban evasion, or subscriber fraud).</p>
            </li>
            
            <li>
              <strong>Rule 3: Respect the privacy of others</strong>
              <p>Instigating harassment, revealing personal information, or encouraging others to do so will result in removal of content and possible ban.</p>
            </li>
            
            <li>
              <strong>Rule 4: Do not post illegal content</strong>
              <p>MatrixAgora does not allow content that breaks the law, incites violence, or promotes illegal activities.</p>
            </li>
            
            <li>
              <strong>Rule 5: No impersonation</strong>
              <p>You may not impersonate individuals, groups, or organizations in a manner that is misleading or deceptive.</p>
            </li>
            
            <li>
              <strong>Rule 6: No spam</strong>
              <p>Repeatedly posting the same or similar content or engaging in manipulation tactics will not be tolerated.</p>
            </li>
          </ol>
          
          <h3>Enforcement</h3>
          <p>
            We have a variety of ways of enforcing our rules, including, but not limited to:
          </p>
          <ul>
            <li>Asking you to stop the behavior</li>
            <li>Temporary or permanent suspension of accounts</li>
            <li>Removal of privileges from, or adding restrictions to, accounts</li>
            <li>Removal of content</li>
            <li>Banning of communities</li>
          </ul>
          
          <h3>Reporting Violations</h3>
          <p>
            If you see content that violates MatrixAgora's content policy, please report it. 
            You can report violations by using the "Report" button available on posts and comments, 
            or by contacting us directly at <a href="mailto:policy@matrixagora.com">policy@matrixagora.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Policy; 