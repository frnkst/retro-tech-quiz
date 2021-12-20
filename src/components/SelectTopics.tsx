type CategoriesProps = {
  selectTopics: (topic: string[]) => void
  selectedTopics: string[]
  allTopics: string[]
}

export function SelectTopics({
  selectTopics,
  selectedTopics,
  allTopics,
}: CategoriesProps) {
  return (
    <div className="self-center w-5/6">
      <div className="flex flex-wrap justify-center cursor-pointer">
        {allTopics.map((topic: string) => {
          return (
            <button
              key={topic}
              data-testid="category"
              className={`${
                selectedTopics.includes(topic)
                  ? 'shadow-inner text-blue-500'
                  : 'shadow-lg text-gray-500'
              } border-2 p-5 md:m-5 m-2 cursor-pointer w-2/6 text-center flex flex-col justify-center`}
              onClick={() => {
                if (selectedTopics.includes(topic)) {
                  selectTopics(selectedTopics.filter((e) => e !== topic))
                } else {
                  selectTopics([...selectedTopics, topic])
                }
              }}
            >
              <span className="self-center text-sm md:text-2xl">{topic}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

