export default function Home() {
  return (
    <section className="bg-gradient-to-r from-blue-400 to-blue-700 h-screen">
  <div className="container mx-auto flex items-center h-full">
    <div className="w-1/2 pr-6 pl-11">
      <h2 className="text-4xl font-semibold text-white mb-4">
        Your Heading Here
      </h2>
      <p className="text-lg text-white">
        Your paragraph text goes here. Provide information about this section.
      </p>
    </div>
    <div className="w-1/2">
      <img
        src="/mechanic.jpg"
        alt="Image Description"
        className="mx-auto rounded-lg shadow-lg h-96" 
      />
    </div>
  </div>
</section>

  )
}
