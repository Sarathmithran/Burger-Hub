import React from "react";

const StatsSection = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Burger Legacy</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Serving happiness one burger at a time since 2010
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Outlets Card */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure className="px-10 pt-10">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Burger outlets"
                className="rounded-xl h-40 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title text-5xl font-bold text-primary">50+</h3>
              <p className="text-lg">Outlets Worldwide</p>
              <div className="badge badge-primary mt-2">Expanding</div>
            </div>
          </div>

          {/* Staff Card */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure className="px-10 pt-10">
              <img
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Burger staff"
                className="rounded-xl h-40 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title text-5xl font-bold text-secondary">200+</h3>
              <p className="text-lg">Dedicated Staff</p>
              <div className="badge badge-secondary mt-2">Family</div>
            </div>
          </div>

          {/* Awards Card */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure className="px-10 pt-10">
              <img
                src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Burger awards"
                className="rounded-xl h-40 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title text-5xl font-bold text-accent">15+</h3>
              <p className="text-lg">Culinary Awards</p>
              <div className="badge badge-accent mt-2">Excellence</div>
            </div>
          </div>

          {/* Customers Card */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure className="px-10 pt-10">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Happy customers"
                className="rounded-xl h-40 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title text-5xl font-bold text-info">1M+</h3>
              <p className="text-lg">Happy Customers</p>
              <div className="badge badge-info mt-2">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;