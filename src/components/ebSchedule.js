import React from "react";
import "./all.sass";
// import { getUser } from "../services/auth";

const EBschedule = () => (
  <>
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <p className="blogPost">
              {/* ここから blogPost */}
              <ul>
                <li>
                  2023-1
                  <ul>
                    <li>Revision of Information for authors</li>
                  </ul>
                </li>
                <li>
                  2023-5
                  <ul>
                    <li>
                      <strong>May 31, 2023 :Termination of submissions to J-Stage (January 2024 issue)</strong>
                    </li>
                  </ul>
                </li>
                2023-6
                <ul>
                  <li>
                    <strong>June 1, 2023: Beginning of submissions to Xplore (February 2024 issue)</strong>
                  </li>
                </ul>
                <li>
                  2023-9
                  <ul>
                    <li>The decision of papers for the January 2024 issue (the final issue of J-Stage) is made.</li>
                  </ul>
                </li>
                <li>
                  2024-1
                  <ul>
                    <li>
                      Papers accepted for publication in the February 2024 issue (IEEE Xplore) (All peer review processes need to complete up to this point.)
                      <br />
                      DOI is J-Stage until the last issue of J-Stage (Jan. 2024).
                      <br />
                      Two special sections will be published on J-Stage
                      <br />
                      <ul>
                        <li>Photonic network technology for Beyond 5G/6G Era (submission due March 31, 2023)</li>
                        <li>Wired-and-Wireless Network System Technologies in Beyond 5G/6G (tentative) (submission due May 9, 2023)</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  2024-2
                  <ul>
                    <li>
                      DOI changes to IEEE.
                      <br />
                      Start hosting EB papers on IEEE Xplore.
                    </li>
                  </ul>
                </li>
              </ul>

              {/* ここまで blogPost */}
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default EBschedule;
