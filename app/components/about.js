export default function About() {
  return (
    <>
      {/* Icon Blocks */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto">
          {/* Grid */}
          <div className="grid gap-12">
            <div>
              <h2
                id="About"
                className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white"
              >
                About us
              </h2>
              <p className="mt-3 text-gray-800 dark:text-gray-400">
                The SoCal Data Championship is a data science competition
                designed to challenge top undergraduates to put their
                mathematical modeling and quantitative research skills to the
                test. <br />
                <br />
                Competitors will have two days to showcase their analytical
                expertise and innovate solutions to real-world quantitative
                problems for a chance at the championship’s cash prize pool.
                Students will be assessed on the performance of their models,
                rigor of their methods, and interpretation of their results.
                <br />
                <br />
                Throughout the event, invited students will also have the
                opportunity to recruit with leading firms at the intersection of
                mathematics and finance. Competitors can engage at the
                chamionship’s career fair, networking dinners, exclusive events,
                and much more.
              </p>
            </div>
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
}
