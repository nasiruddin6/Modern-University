import React from 'react';
import Marquee from 'react-fast-marquee';
import { NavLink } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

export const notices = [
  {
    id: 1,
    text: 'Spring 2026 admission applications are now open — apply before March 15.',
    path: '/admissions/apply',
  },
  {
    id: 2,
    text: 'Mid-term examination schedule published for all faculties.',
    path: '/academics/calendar',
  },
  {
    id: 3,
    text: 'Campus career fair on April 10 — register at the student portal.',
    path: '/events',
  },
  {
    id: 4,
    text: 'Scholarship applications for merit-based awards close on February 28.',
    path: '/scholarships',
  },
  {
    id: 5,
    text: 'Library extended hours during final exams: 8 AM – 11 PM.',
    path: '/academics/library',
  },
];

const NoticeTicker = () => {
  const [tickerRef, inView] = useInView();

  return (
    <div
      ref={tickerRef}
      className="fixed left-0 top-[72px] z-40 flex h-10 w-full items-stretch border-b border-gray-200 bg-white shadow-sm"
    >
      <div className="flex shrink-0 items-center bg-red-600 px-4 text-xs font-bold uppercase tracking-widest text-white sm:px-5 sm:text-sm">
        Notice
      </div>

      <div className="min-w-0 flex-1">
        <Marquee speed={40} pauseOnHover gradient={false} play={inView} className="h-full">
          {notices.map((notice) => (
            <span key={notice.id} className="flex items-center">
              {notice.path ? (
                <NavLink
                  to={notice.path}
                  className="text-sm text-gray-700 transition-colors hover:text-emerald-600"
                >
                  {notice.text}
                </NavLink>
              ) : (
                <span className="text-sm text-gray-700">{notice.text}</span>
              )}
              <span className="mx-8 text-gray-300" aria-hidden="true">
                •
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default NoticeTicker;
