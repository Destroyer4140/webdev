import CommentList from "./CommentList"

const commentData = [
  {
    name: "Shubham",
    comment: "Hi SHubham You are doing good",
    replies: [
      {
        name: "Ram",
        comment: "Hi Ram You are doing good",
        replies:[]
      },
      {
        name: "Rahul",
        comment: "Hi Rahul You are doing good",
        replies:[
          {
            name: "Shubham",
            comment: "Hi SHubham You are doing good",
            replies:[]
          },
        ]
      },
      {
        name: "Aman",
        comment: "Hi Aman You are doing good",
        replies:[]
      },
    ]
  },
  {
    name: "Sam",
    comment: "Hi Sam You are doing good",
    replies: [
      {
        name: "Rahul",
        comment: "Hi Rahul You are doing good",
        replies:[]
      }
    ]
  },
  {
    name: "Aman",
    comment: "Hi Aman You are doing good",
    replies: [
      {
        name: "Ram",
        comment: "Hi Ram You are doing good",
        replies:[]
      }
    ]
  }
]

const CommentsContainer = () => {



  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentList comments={commentData}/>
    </div>
  )
}

export default CommentsContainer