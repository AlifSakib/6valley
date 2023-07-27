import RootLayout from "@/layouts/root-layout"

const HomePage = () => {

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default HomePage

HomePage.getLayout = function getLayout(page) {
  return (
    <div>
      <RootLayout>{page}</RootLayout>
    </div>
  )
}