import React from "react";
import "./all.sass";
// import { getUser } from "../services/auth";

const ComEXinfo = () => (
  <>
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <p className="blogPost">
              {/* ここから blogPost */}
              <p>
                <strong>
                  Please note that this is for the authors who submit their manuscripts to IEICE Communication Express (ComEX) after June 1st, 2023.
                  <br />
                  For those who submit their manuscripts before June 1st, 2023, please refer <a href="https://www.ieice.org/cs_r/eng/comex/for_authors.html">here</a>.
                </strong>
              </p>
              <p>The contents are subject to change without notification in advance. Authors who submit manuscripts to ComEX must comply with the guidelines laid out in this document.</p>
              <p>
                The charter of ethics of the IEICE is available on the IEICE web page:
                <a href="https://www.ieice.org/eng/about_ieice/charter_of_ethics.html">https://www.ieice.org/eng/about_ieice/charter_of_ethics.html</a>
              </p>
              <hr />
              <p>Table of Contents</p>
              <ul>
                <li>
                  <a href="#recommendation-for-non-members-to-join-the-ieice">Recommendation for non-members to join the IEICE:</a>
                </li>
                <li>
                  <a href="#type-of-manuscript">Type of manuscript:</a>
                </li>
                <li>
                  <a href="#scope">Scope:</a>
                </li>
                <li>
                  <a href="#review-policy">Review policy:</a>
                </li>
                <li>
                  <a href="#originality-of-manuscript">Originality of manuscript:</a>
                  <ul>
                    <li>
                      <a href="#copyright-compliance">Copyright Compliance</a>
                    </li>
                    <li>
                      <a href="#no-duplicate-submissions">No Duplicate Submissions</a>
                    </li>
                    <li>
                      <a href="#countermeasures-against-duplicate-submission">Countermeasures against duplicate submission</a>
                    </li>
                    <li>
                      <a href="#novelty">Novelty</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#protection-of-personal-information">Protection of personal information:</a>
                </li>
                <li>
                  <a href="#ethical-considerations-in-research-involving-human-and-animal-participants">Ethical considerations in research involving human and animal participants:</a>
                </li>
                <li>
                  <a href="#preparing-manuscript">Preparing manuscript:</a>
                </li>
                <li>
                  <a href="#suggestion-for-authors-preparing-multi-color-display-items">Suggestion for authors preparing multi-color display items:</a>
                </li>
                <li>
                  <a href="#submitting-manuscript">Submitting manuscript:</a>
                </li>
                <li>
                  <a href="#publishing-paper">Publishing paper:</a>
                </li>
                <li>
                  <a href="#advance-publication">Advance publication:</a>
                </li>
                <li>
                  <a href="#reading-page-proof">Reading page proof:</a>
                </li>
                <li>
                  <a href="#article-processing-charge">Article processing charge:</a>
                </li>
                <li>
                  <a href="#submission-to-ieice-transaction">Submission to IEICE Transaction:</a>
                </li>
                <li>
                  <a href="#resubmission">Resubmission:</a>
                </li>
                <li>
                  <a href="#copyright">Copyright:</a>
                </li>
                <li>
                  <a href="#privacy">Privacy:</a>
                </li>
                <li>
                  <a href="#refutation">Refutation:</a>
                </li>
                <li>
                  <a href="#withdrawing-a-submission">Withdrawing a Submission:</a>
                </li>
                <li>
                  <a href="#citation">Citation:</a>
                </li>
                <li>
                  <a href="#contact-us">Contact us:</a>
                </li>
              </ul>
              <p>
                <a id="recommendation-for-non-members-to-join-the-ieice"></a>
              </p>
              <h2 id="recommendation-for-non-members-to-join-the-ieice">Recommendation for non-members to join the IEICE:</h2>
              <p>If there are non-members among the authors, we recommend that the authors take this opportunity to join the IEICE. For detailed information on the IEICE Membership Application, please refer to here. If all authors are non-members, the article processing charge for non-members will be applied, except for invited papers.</p>
              <p>
                <a id="type-of-manuscript"></a>
              </p>
              <h2 id="type-of-manuscript">Type of manuscript:</h2>
              <p>All ComEX papers are classified with LETTER, which includes reports on research, developments, and examinations for the specific fields shown in the category list, such as detailed below, the contents of which may advance the development of science and industry:</p>
              <ol>
                <li>
                  <p>Reports on research for a prompt announcement.</p>
                  <p>(a) Reports on new theories, experiments with new contents, or extensions of and supplements to conventional theories and experiments.</p>
                  <p>(b) Reports on the development of measurement technology and various applied technologies.</p>
                  <p>(c) Reports on the planning, design, manufacture, testing, or operation of facilities, machinery, parts, materials, etc.</p>
                  <p>
                    (d) Presentation of new methods, a suggestion of new angles, ideas, systematization, software, or any new facts regarding the above (a) to (c).
                    <br />
                    <br />
                  </p>
                </li>
                <li>
                  <p>Written discussions to submit opinions to articles published in ComEX.</p>
                </li>
                <li>
                  <p>Suggestion of critical opinions conceived in relation to research.</p>
                </li>
              </ol>
              <p>
                <a id="scope"></a>
              </p>
              <h2 id="scope">Scope:</h2>
              <p>IEICE COMMUNICATIONS EXPRESS (ComEX) is an all-electronic journal published occasionally by the Institute of Electronics, Information and Communication Engineers (IEICE) and edited by the Communications Society in IEICE. ComEX publishes original, peer-reviewed papers that embrace the entire field of communications, including:</p>
              <ul>
                <li>Fundamental Theories for Communications</li>
                <li>Energy in Electronics Communications</li>
                <li>Transmission Systems and Transmission Equipment for Communications</li>
                <li>Optical Fiber for Communications</li>
                <li>Fiber-Optic Transmission for Communications</li>
                <li>Network System</li>
                <li>Network</li>
                <li>Internet</li>
                <li>Network Management/Operation</li>
                <li>Antennas and Propagation</li>
                <li>Electromagnetic Compatibility (EMC)</li>
                <li>Wireless Communication Technologies</li>
                <li>Terrestrial Wireless Communication/Broadcasting Technologies</li>
                <li>Satellite Communications</li>
                <li>Sensing</li>
                <li>Navigation, Guidance, and Control Systems</li>
                <li>Space Utilization Systems for Communications</li>
                <li>Multimedia Systems for Communication</li>
              </ul>
              <p>Military technology is out of the scope of ComEX. ComEX does not reject a submission because of the source of research funding and/or the authors’affiliation. If necessary, ComEX negotiates with authors.</p>
              <p>
                <a id="review-policy"></a>
              </p>
              <h2 id="review-policy">Review policy:</h2>
              <p>
                ComEX publishes concise technical reports on outstanding inventions, innovations, and findings that have influential importance to communications engineers. Rapid circulation of publications, as well as article quality, is deemed essential for both authors and readers working in these fast-moving fields. For promptness in reviewing and
                publishing procedures, authors are strongly advised to write their manuscripts clearly and simply so that the significance of their accomplishment can be readily spotted. All manuscripts are evaluated as either &quot;accepted for publication&quot; or &quot;rejected.&quot; Manuscripts that do not match the scope or the style regulation would
                not be received. Manuscripts evaluated as minor values for communications engineers would not be accepted even though they report novel results. Reviewers should have no conflict of interest and should point out relevant work which is not yet cited. Reviewed articles should be treated confidentially.
              </p>
              <p>
                <a id="originality-of-manuscript"></a>
              </p>
              <h2 id="originality-of-manuscript">Originality of manuscript:</h2>
              <p>
                <a id="copyright-compliance"></a>
              </p>
              <h3 id="copyright-compliance">Copyright Compliance</h3>
              <ol>
                <li>Obey the IEICE Provisions on Copyright.</li>
                <li>Do not submit content identical or extremely similar to material that has already appeared under the name of another author(s). Do not reproduce copyrighted material without the permission of the copyright holder.</li>
                <li>Even if you are the author(s) of a manuscript, do not submit it if copyright problems exist, for example, if the copyright is held by a body other than the IEICE and cannot be transferred to the IEICE.</li>
                <li>In cases deemed plagiarism, penalties identical to those assessed in the event of duplicate submission shall be applied.</li>
              </ol>
              <p>
                <a id="no-duplicate-submissions"></a>
              </p>
              <h3 id="no-duplicate-submissions">No Duplicate Submissions</h3>
              <p>
                If a submitted material satisfies the following conditions (1) or (2) and the materials in the corresponding condition share at least one author, ComEX will consider the material submission as &quot;DUPLICATE SUBMISSION&quot; even if it does not violate &quot;Copyright Compliance.&quot; In this case, ComEX applies a strict penalty to the
                author(s) of the submitted material. This is because ComEX does not care about its written language, but cares about semantic-content similarity.
              </p>
              <ol>
                <li>A material submitted to ComEX is identical or extremely similar to a material that has already appeared or is under review in any journal or elsewhere.</li>
                <li>A material submitted to any journal or elsewhere is identical or extremely similar to a material that has already appeared or is under review in ComEX.</li>
              </ol>
              <p>Here, &quot;under review&quot; means the state from its submission either to publication, to rejection, or to withdrawal. Notwithstanding the above, a submission will not be treated as a duplicate submission if every such material in the above conditions applies to at least one of the following conditions from (a) to (f).</p>
              <p>(a) a patent publication gazette or the like</p>
              <p>(b) an university undergraduate thesis, master&#39;s thesis, doctoral thesis, technical report, etc.</p>
              <p>(c) the abstracts, proceedings, etc., of a meeting, seminar, or international conference of the IEICE or other academic organization</p>
              <p>(d) a book, a corporate technical journal or bulletin, etc.</p>
              <p>(e) a newspaper article or the like</p>
              <p>(f) a preprint server of a highly public nature, an author&#39;s own home page, or the like</p>
              <p>Note that refereed materials among the above (a) to (f) should be cited in submitted material as the footnotes or references.</p>
              <p>
                <a id="countermeasures-against-duplicate-submission"></a>
              </p>
              <h3 id="countermeasures-against-duplicate-submission">Countermeasures against duplicate submission</h3>
              <p>
                If a manuscript is suspected of duplicate submission to any journal, the IEICE Editorial Committee has the right to investigate the situation by exchanging information with the Editorial Board of the concerned journal. When discreet inquiries confirm the duplicate submission, the IEICE Editorial Committee will apply the following sanctions
                against all the authors of the manuscript.
              </p>
              <ol>
                <li>Immediate rejection of the manuscript in question, and also the immediate rejection of all other manuscripts under review that includes at least one of the authors of the manuscript in question.</li>
                <li>Prohibition of any new submissions to all the IEICE transactions and journals for one year or less.</li>
                <li>Notification to the Editorial Board of the concerned journal about the duplicate submission.</li>
                <li>Publication of a notice that announces the cancelation of the paper (or letter), as well as the indication of the cancelation on the web site of IEEE Xplore (from October 1st, 2023) and J-STAGE, in the case that the manuscript has already been published in our transactions.</li>
              </ol>
              <p>
                <a id="novelty"></a>
              </p>
              <h3 id="novelty">Novelty</h3>
              <p>
                There are three essential criteria, i.e., novelty, effectiveness, and reliability, upon which a review is based. Novelty is the most important requirement. From this viewpoint, material previously copyrighted, published, or accepted for publication will not be considered for publication. Exceptions to this rule might include items (a) through
                (f), which are shown above in “No Duplicate Submissions.” In this regard, however, authors must disclose their refereed materials among prior works in the submitted manuscript and clearly indicate how the submitted material differs from the prior refereed works. A submitted manuscript may be considered for publication in ComEX if it adds
                value relative to the prior refereed works, such as its conference version.
              </p>
              <p>
                <a id="protection-of-personal-information"></a>
              </p>
              <h2 id="protection-of-personal-information">Protection of personal information:</h2>
              <p>Sufficient care should be exercised when submitting a manuscript bearing personal data such as photographs or names to the transactions. If necessary, written permission should be obtained from the individual concerned.</p>
              <p>
                <a id="ethical-considerations-in-research-involving-human-and-animal-participants"></a>
              </p>
              <h2 id="ethical-considerations-in-research-involving-human-and-animal-participants">Ethical considerations in research involving human and animal participants:</h2>
              <p>
                The author(s) should obtain approval from the ethics committee or the equivalent organization within the author&#39;s institution for research related to the life or living organism of the participants. However, if the author group consists of multiple institutions, it is sufficient to obtain approval from at least one of the institutions.
              </p>
              <p>
                <a id="preparing-manuscript"></a>
              </p>
              <h2 id="preparing-manuscript">Preparing manuscript:</h2>
              <p>
                Manuscripts to ComEX are accepted via electronic submission only. Authors are requested to prepare their manuscripts by using one of the officially approved formats (LaTeX style file or Microsoft Word template), in which all the styles and formats are prescribed. From June 1st, 2023, the maximum number of pages is four (4). Since ComEX
                manuscripts are rapidly published as submitted (or at least minimum editing/formatting by publisher), it is essential to adhere to the provided templates.
              </p>
              <p>Template files (for submission from June 1st, 2023)</p>
              <ul>
                <li>For LaTeX users: ComEX_template_LaTeX.zip</li>
                <li>For MS Word users: ComEX_template_Word.zip</li>
              </ul>
              <p>
                Send any bug reports of template files to IEICE Transactions Section (<a href="mailto:&#99;&#x6f;&#109;&#101;&#x78;&#x40;&#105;&#x65;&#x69;&#99;&#x65;&#46;&#111;&#x72;&#103;">&#99;&#x6f;&#109;&#101;&#x78;&#x40;&#105;&#x65;&#x69;&#99;&#x65;&#46;&#111;&#x72;&#103;</a>)
              </p>
              <p>
                <a id="submission-to-ieice-transaction"></a>
              </p>
              <h2 id="suggestion-for-authors-preparing-multi-color-display-items">Suggestion for authors preparing multi-color display items:</h2>
              <p>Color figures can be included in ComEX manuscripts. Authors, however, should be reminded that some reviewers/readers might be color-blind. Therefore, authors are kindly advised to consider the following suggestions when preparing figures:</p>
              <ol>
                <li>Avoid using a combination of red and green. Use magenta (purple) and green instead.</li>
                <li>Do not overuse colors in the graphs but consider using different hatchings, shapes, line types (solid, dotted, or dashed), or symbols for different curves.</li>
                <li>Note that the red color does not appear bright or vivid for color-blind people. Therefore, avoid using red characters or symbols for the purpose of highlighting.</li>
              </ol>
              <p>
                <a id="submitting-manuscript"></a>
              </p>
              <h2 id="submitting-manuscript">Submitting manuscript:</h2>
              <p>
                To submit a manuscript to ComEX, authors should visit an IEICE website (<a href="https://review.ieice.org/regist/regist_baseinfo_e.aspx">https://review.ieice.org/regist/regist_baseinfo_e.aspx</a>) to complete a Submission Form and to upload the following items:
              </p>
              <ul>
                <li>a PDF file for review</li>
                <li>an electronic file of the manuscript in either LaTeX or MS Word</li>
                <li>original art work in separate electronic files</li>
              </ul>
              <p>
                Art-file formats are restricted. ComEX accepts PS, EPS, PDF, PNG, or TIFF formats for art-file formats. Self-descriptive file names such as fig1.eps and fig2.eps are preferred. In addition to the above items, authors who would like to include their Open Researcher and Contributor ID (ORCID) in the published manuscript are required to upload
                the following item:
              </p>
              <ul>
                <li>
                  a text file named &quot;ORCID.txt&quot; including the list of names and ORCID of each author in the following format:
                  <ul>
                    <li>Name of author 1, ORCID of author 1</li>
                    <li>Name of author 2, ORCID of author 2</li>
                    <li>...</li>
                  </ul>
                </li>
              </ul>
              <p>
                Note that ORCID will not be included in advance publication articles. Authors are also requested to select the subject index (code and field) best fitting manuscript from the candidates. The Editors use the index when directing manuscript to corresponding Associate Editor. Furthermore, it is displayed on J-STAGE for readers&#39; convenience.
                The Editorial Committee may change the subject index that authors select, if the Editorial Committee judges that the authors&#39; selection is not the best. It is authors, not the IEICE, who are responsible for ensuring that the contents of their manuscripts are legitimate and that they are legally submitted.
              </p>
              <p>
                <a id="publishing-paper"></a>
              </p>
              <h2 id="publishing-paper">Publishing paper:</h2>
              <p>An Associate Editor will carry out the manuscript review in as expeditious a fashion as possible.</p>
              <p>
                <a id="advance-publication"></a>
              </p>
              <h2 id="advance-publication">Advance publication:</h2>
              <p>
                For letters submitted from June 1st, 2023, accepted letters will be published online on J-STAGE and IEEE Xplore. Accepted letters will be published under a <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License (CC BY-NC-ND 4.0)</a>. Please note that
                advance publication articles have not been proofread. These articles will be replaced by the finalized versions after proofreading. The date of advance publication is the date of publication of the article. To cite an advance publication article, the article’s Digital Object Identifier (DOI) should be used. The DOI is a unique identifier for
                each article, and does not change after official publication. Although the volume, number and pages are assigned to the article after official publication, it is recommended that the DOI is also indicated.
              </p>
              <p>A style for listing cited advance publication articles:</p>
              <p>[1] A. Anyone and B. Another, &quot;On advance publication,&quot; IEICE Commun. Express., Jan. 2015. DOI:10.1587/comex.2015XBL1234.</p>
              <p>A style for listing cited articles after official publication:</p>
              <p>Same as for advance publication articles, or,</p>
              <p>[2] A. Anyone and B. Another, &quot;On advance publication,&quot; IEICE Commun. Express., vol.4, no.x, (Month) 2015. DOI:10.1587/comex.2015XBL1234.</p>
              <p>
                <a id="reading-page-proof"></a>
              </p>
              <h2 id="reading-page-proof">Reading page proof:</h2>
              <p>
                A page proof in the PDF format is sent to the corresponding author only once prior to the publication of the manuscript. Minor and typographical errors should be corrected on the printout or by PDF mark-up and returned to the IEICE Transactions Section through web or via fax within three (3) days, after which the manuscript may be published
                as is.
              </p>
              <p>
                <a id="article-processing-charge"></a>
              </p>
              <h2 id="article-processing-charge">Article processing charge:</h2>
              <p>
                For letters submitted after June 1st, 2023, upon being accepted for publication, the authors are requested to pay a mandatory article processing charge of JPY 98,010 for a manuscript using LaTeX style file or JPY 118,030 for a manuscript using MS Word template. If the payment of a letter submitted before June 1st, 2023, cannot be confirmed by
                July 20th, 2023, the letter is published on IEEE Xplore and J-STAGE. And the authors of the letter are requested to pay the article processing charge for the publication on IEEE Xplore and J-STAGE. If all authors are non-members, we request an additional JPY 20,000. Authors should notice that the publication will be suspended until the
                payment is confirmed by the. If the payment cannot be confirmed within three months from the date when the notification of acceptance is sent, the manuscript will be handled as a rejected paper, and ComEX will not receive any manuscript written by one of the authors for one year or less as the penalty. For special clusters, the period of the
                payment will be shortened.
              </p>
              <p>
                As part of our effort to support IEICE Overseas Members residing in Asia (except Republic of Korea, Taiwan, China, and Singapore), Africa, Central America, and South America, the Overseas Membership Development Program (OMDP) provides a discount on article processing charges. For details on eligibility for each Membership grade, please refer
                to our web page: <a href="https://www.ieice.org/eng_r/member/individual_member/OMDP_en.pdf">https://www.ieice.org/eng_r/member/individual_member/OMDP_en.pdf</a>. In addition, if the first author of a manuscript meets the requirements of the OMDP, the article processing charges will be reduced by 60 % at the authors’ request. Furthermore, in
                case the first author is an Overseas Student Member, the article processing charges will be reduced by 80 % at the authors’ request. We note that OMDP is not applied if all authors are non-members.
              </p>
              <p>
                <a id="submission-to-ieice-transaction"></a>
              </p>
              <h2 id="submission-to-ieice-transaction">Submission to IEICE Transaction:</h2>
              <p>Papers published in ComEX are categorized as “LETTERS.” We, however, encouraged the authors to develop their research and submit results as “FULL PAPER” to the IEICE Transaction.</p>
              <p>
                <a id="resubmission"></a>
              </p>
              <h2 id="resubmission">Resubmission:</h2>
              <p>
                For manuscripts receiving rejection notices, the revised version of the manuscript may be resubmitted. Authors must take the same steps as the initial submission when submitting a revised version of the manuscript. Upon resubmission, the authors are encouraged to provide the previous paper ID number and the &quot;Reply Letter&quot; to
                expedite the review process.
              </p>
              <p>
                <a id="copyright"></a>
              </p>
              <h2 id="copyright">Copyright:</h2>
              <p>
                The copyrights for all articles in journals published by the IEICE, whatever medium it may be presented, are automatically transferred to the IEICE. However, authors themselves may copy, translate or modify their own manuscripts. In such cases, when translating the manuscript or using all or most of the manuscript in other publications,
                authors should report the fact to the IEICE, and the original manuscript should be clearly cited in the publications. Even when only part of the manuscript is used, the reference for the original manuscript should be included, or the reference should be presented in the figure captions.
              </p>
              <p>
                <a id="privacy"></a>
              </p>
              <h2 id="privacy">Privacy:</h2>
              <p>
                The IEICE collects the personal information of authors when they submit manuscripts to ComEX. The IEICE may use collected personal information only to improve its publishing services and provide authors with further benefits. Examples of such activity are statistical analysis of submissions, e-mail alerting of the latest updates, requests for
                comments, and suggestions to the ComEX services. Authors’ personally identifiable information will not be disclosed unless the law requires it. The IEICE may share aggregated information with partners.
              </p>
              <p>
                <a id="refutation"></a>
              </p>
              <h2 id="refutation">Refutation:</h2>
              <p>
                Authors who disagree with reviewers’ comments and with an evaluation of the editorial committee are given the opportunity to submit their refutation in a document to the Editor. The refutation shall be forwarded to the reviewer. The editorial committee makes decision with reference to the reviewer’s response. Authors are notified of the
                results within 90 days after the refutation is submitted. Refutations can be submitted only once for the respective manuscripts.
              </p>
              <p>
                <a id="withdrawing-a-submission"></a>
              </p>
              <h2 id="withdrawing-a-submission">Withdrawing a Submission:</h2>
              <p>Authors should not withdraw their submitted papers because the withdrawal wastes voluntary works devoted by an associate editor and reviewers. However, we accept the withdrawal of a submitted paper if the authors have unavoidable reasons. Authors must follow the procedures shown below when they withdraw their submitted papers.</p>
              <ol>
                <li>
                  <p>Authors must send a withdrawal request letter by e-mail with its scanned PDF file to the IEICE Transactions Section before the notification of acceptance for publication. The withdrawal request letter must include the following information.</p>
                  <p>(a) Paper number</p>
                  <p>(b) Paper title</p>
                  <p>(c) Authors’ names</p>
                  <p>(d) Reason why the paper must be withdrawn</p>
                  <p>(e) Date and signatures of all the authors (or signature of the contact author)</p>
                </li>
              </ol>
              <p>If only the contact author signs the letter, he/she must obtain the withdrawal agreement from all the other authors and the letter must include the description that all the other authors agreed the withdrawal.</p>
              <ol start="2">
                <li>After the paper is accepted for publication, withdrawal is not permitted in principle. The authors must always pay the Article processing charge even if the withdrawal is permitted.</li>
                <li>The Editor-in-Chief of IEICE ComEX decides whether the withdrawal can be allowed or not. The IEICE Transactions Section will send the corresponding authors the decision of the Editorial Committee. If the authors do not receive any reply from the IEICE Transactions Section, they must send an inquiry about the withdrawal to the office.</li>
                <li>The date of the withdrawal is given in the permission.</li>
                <li>Any request for withdrawal that does not follow the above procedure is treated as invalid.</li>
              </ol>
              <p>If illegal submission, e.g., plagiarized or duplicate submission, is found for a paper, the withdrawal of the paper will never be permitted, and the authors will be punished based on the rule.</p>
              <p>
                <a id="citation"></a>
              </p>
              <h2 id="citation">Citation:</h2>
              <p>IEICE COMMUNICATIONS EXPRESS is abbreviated as “IEICE Commun. Express.”</p>
              <p>
                <a id="contact-us"></a>
              </p>
              <h2 id="contact-us">Contact us:</h2>
              <p>
                IEICE Transactions Section
                <br />
                The Institute of Electronics, Information and Communication Engineers (IEICE)
                <br />
                Kikai-Shinko-Kaikan Bldg.,
                <br />
                3-5-8, Shibakoen, Minato-ku, Tokyo, 105-0011 JAPAN
                <br />
                E-mail: <a href="mailto:comex@ieice.org">comex@ieice.org</a>
              </p>

              {/* ここまで blogPost */}
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ComEXinfo;
