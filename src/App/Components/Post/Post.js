import React from "react";
import "./Post.css";
import p1 from "./p3.jpg";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.props.pathRecorder(true);
  }

  render() {
    return (
      <div className="postext-container">
        <div className="postext-title">
          <h2> Post Title </h2>
          <span> 7/12/2020 06:22:00 下午 </span>
        </div>
        <div className="content-container">
          <div className="post-text-container">
            <p>
              Definition of text (Entry 1 of 2) 1a(1): the original words and
              form of a written or printed work (2): an edited or emended copy
              of an original work b: a work containing such text 2a: the main
              body of printed or written matter on a page b: the principal part
              of a book exclusive of front and back matter c: the printed score
              of a musical composition 3a(1): a verse or passage of Scripture
              chosen especially for the subject of a sermon or for authoritative
              support (as for a doctrine) (2): a passage from an authoritative
              source providing an introduction or basis (as for a speech) b: a
              source of information or authority 4: THEME, TOPIC 5a: the words
              of something (such as a poem) set to music b: matter chiefly in
              the form of words or symbols that is treated as data for
              processing by computerized equipment text-editing software 6: a
              type suitable for printing running text 7: TEXTBOOK 8a: something
              (such as a story or movie) considered as an object to be examined,
              explicated, or deconstructed b: something likened to a text the
              surfaces of daily life are texts to be explicated — Michiko
              Kakutani 9: FRAME OF REFERENCE sense 2 updated to fit the women's
              lib text for consciousness raising — Judith Crist 10: TEXT MESSAGE
              sent a text with the details text verb texted\ ˈtek-​stəd ,
              nonstandard ˈtekst \; texting Definition of text (Entry 2 of 2)
              transitive verb : to send a text message from one cell phone to
              another intransitive verb : to communicate by text messaging Other
              Words from text Synonyms More Example Sentences Learn More About
              text Other Words from text Verb texter noun Synonyms for text
              Synonyms: Noun handbook, manual, primer, textbookVisit the
              Thesaurus for More Examples of text in a Sentence Noun A good
              critic will refer back to the text often. You can find the full
              text of his speech on his Web site. See More Recent Examples on
              the Web: Noun The text messages will be displayed in either
              English or Spanish, based on the language settings of the
              recipient’s device. — Leada Gore | Lgore@al.com, al, 5 Aug. 2021
              Instead, the trust was built through years of phone calls, text
              messages, and Zoom sessions until Tuimoloau finally came to
              Columbus on June 18. — Stephen Means, cleveland, 5 Aug. 2021 These
              example sentences are selected automatically from various online
              news sources to reflect current usage of the word 'text.' Views
              expressed in the examples do not represent the opinion of
              Merriam-Webster or its editors. Send us feedback. See More First
              Known Use of text Noun 14th century, in the meaning defined at
              sense 1a(1) Verb 1998, in the meaning defined at transitive sense
              History and Etymology for text Noun Middle English, from
              Anglo-French tiste, texte, from Medieval Latin textus, from Latin,
              texture, context, from texere to weave — more at TECHNICAL
            </p>
          </div>
          <div className="post-photo-container">
            <img alt="img" src={p1} />
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
