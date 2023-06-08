import React from "react";

const Logs = () => {
  const [routeCoordinates, setRouteCoordinates] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setRouteCoordinates([
        [73.8567, 18.5204],
        [73.7898, 18.5079],
        [73.9733, 18.5333],
        [73.9957, 18.5742],
        [73.9251, 18.5167],
      ]);
      setLoading(false);
      console.log(routeCoordinates);
    }, 3000);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <div className="m-4">
      {routeCoordinates?.map((coordinate, index) => (
        <div
          key={index}
          className="flex items-center py-2 px-4 mb-2 bg-gray-100 rounded-md shadow-lg"
        >
          <div className="w-8 h-8 rounded-full bg-indigo-500 flex-shrink-0"></div>
          <div className="flex flex-col ml-4">
            {!loading && (
              <span className="text-gray-800 font-medium">
                {`${coordinate[0]} : ${coordinate[1]}`}
              </span>
            )}
            {loading && <span className="text-gray-500">Loading...</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Logs;
