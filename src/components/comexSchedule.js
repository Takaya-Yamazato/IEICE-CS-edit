import React from "react";
import "./all.sass";
// import { getUser } from "../services/auth";

const ComEXschedule = () => (
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
                  2023-2
                  <ul>
                    <li>Migration procedure to IEEE Xplore starts at J-STAGE (Notify CrossRef of DOI change (J-STAGE -&gt; IEEE Xplore)</li>
                  </ul>
                </li>
                <li>
                  2023-5
                  <ul>
                    <li>
                      <strong>May 31, 2023: Termination of submissions to J-STAGE (September 2023 issue)</strong>
                    </li>
                  </ul>
                </li>
                <li>
                  2023-6
                  <ul>
                    <li>
                      <strong>June 1, 2023: Beginning of submissions to Xplore (October 2023 issue)</strong>
                    </li>
                  </ul>
                </li>
                <li>
                  2023-8
                  <ul>
                    <li>
                      One special section will be published in J-STAGE.
                      <br />
                      ICETC 2022-related (tentative) (submission due January 5, 2023)
                    </li>
                  </ul>
                </li>
                <li>
                  2023-9
                  <ul>
                    <li>DOI is J-STAGE until the last issue of J-STAGE (September 2023)</li>
                  </ul>
                </li>
                <li>
                  2023-10
                  <ul>
                    <li>
                      DOI changes to IEEE.
                      <br />
                      Start hosting ComEX letters on IEEE Xplore.
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

export default ComEXschedule;
