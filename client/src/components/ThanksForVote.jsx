import VoteStyle from './ThanksForVote.module.css'
export default function ThanksForVote() {
  return (
    <div className={VoteStyle.voteMain}>
      <h1 className={VoteStyle.voteHead}>Thanks for voting!</h1>
      <p className={VoteStyle.votePara}>Your vote has been recorded.</p>
    </div>
  );
}