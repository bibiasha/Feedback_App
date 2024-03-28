import Card from "../component/share/Card"

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This is a Feedback Page</p>
        <p>You can give your feedback</p>
        <p>
            <a href='/'>Back</a>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage;
