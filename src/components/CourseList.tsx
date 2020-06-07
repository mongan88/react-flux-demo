import React from "react";
import { ICourse } from "../serverinterfaces";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CourseList(props: { courses: ICourse[] }) {
  const getRow = (course: ICourse) => {
    return (
      <tr key={course.id}>
        <td>
          <Link to={`/course/${course.slug}`}>{course.title}</Link>
        </td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>{props.courses.map(getRow)}</tbody>
    </table>
  );
}

// PropTypes only work in development build!
CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

CourseList.defaultProps = {
  courses: [],
};

export default CourseList;
