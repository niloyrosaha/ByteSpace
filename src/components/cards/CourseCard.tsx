import Image from "next/image";
import { cn } from "@/lib/cn";
import type { CourseCardData } from "@/data/courses";

/* Level-pill chart icon — supplied SVG path, preserved exactly. */
const CHART_PATH =
  "M13.75 3.33325H16.25V16.6666H13.75V3.33325ZM3.75 11.6666H6.25V16.6666H3.75V11.6666ZM8.75 7.49992H11.25V16.6666H8.75V7.49992Z";

export function CourseCard({ course }: { course: CourseCardData }) {
  return (
    <article className="course-card">
      {/* Cover — url() is quoted because the asset filenames contain parentheses */}
      <div
        className="course-card__image"
        style={{ backgroundImage: `url("${course.image}")` }}
        role="img"
        aria-label={course.title}
      >
        {/* Stat pills overlaid on the cover (guide: .course-card__stats) */}
        <div className="course-card__stats">
          {course.stats.map((stat) => (
            <span key={stat} className="course-card__stat">
              {stat}
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="course-card__content">
        <div>
          <h3
            className={cn(
              "course-card__title",
              course.titleWidth && "truncate",
            )}
            style={
              course.titleWidth ? { width: course.titleWidth } : undefined
            }
          >
            {course.title}
          </h3>
          <p className="course-card__author">{course.creator}</p>
        </div>

        <div className="course-card__details">
          <span className="course-card__level">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path d={CHART_PATH} fill="#4B4C53" />
            </svg>
            Beginner
          </span>

          <div className="course-card__avatars">
            {course.avatars.map((src) => (
              <Image
                key={src}
                src={src}
                alt=""
                aria-hidden
                width={32}
                height={32}
                className="course-card__avatar"
              />
            ))}
            <span className="course-card__avatar-count">{course.extraLabel}</span>
          </div>
        </div>

        <div className="course-card__price">
          <p className="course-card__price-value">{course.price}</p>
          <p className="course-card__lifetime">{course.per}</p>
        </div>
      </div>

      {/* Rating — top-right, number + star (guide: .course-card__rating) */}
      <p className="course-card__rating">
        {course.rating}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          className="ml-0.5"
        >
          <path
            d="M14.4297 9.61158L12.9597 4.77158C12.6697 3.82158 11.3297 3.82158 11.0497 4.77158L9.56971 9.61158H5.11971C4.14971 9.61158 3.74971 10.8616 4.53971 11.4216L8.17972 14.0216L6.74971 18.6316C6.45971 19.5616 7.53972 20.3116 8.30972 19.7216L11.9997 16.9216L15.6897 19.7316C16.4597 20.3216 17.5397 19.5716 17.2497 18.6416L15.8197 14.0316L19.4597 11.4316C20.2497 10.8616 19.8497 9.62158 18.8797 9.62158H14.4297V9.61158Z"
            fill="#CED0D3"
          />
        </svg>
      </p>
    </article>
  );
}
