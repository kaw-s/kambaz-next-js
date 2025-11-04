// app/Kanbas/Dashboard/enrollmentsReducer.ts
"use client";
import { createSlice } from "@reduxjs/toolkit";

interface EnrollmentsState {
  enrollments: { userId: string; courseId: string }[];
  showAllCourses: boolean;
}

const initialState: EnrollmentsState = {
  enrollments: [],
  showAllCourses: false,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    enrollCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      const exists = state.enrollments.some(
        (e) => e.userId === userId && e.courseId === courseId
      );
      if (!exists) {
        state.enrollments.push({ userId, courseId });
      }
    },
    unenrollCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (e) => !(e.userId === userId && e.courseId === courseId)
      );
    },
    toggleShowAllCourses: (state) => {
      state.showAllCourses = !state.showAllCourses;
    },
    setShowAllCourses: (state, action) => {
      state.showAllCourses = action.payload;
    },
  },
});

export const {
  setEnrollments,
  enrollCourse,
  unenrollCourse,
  toggleShowAllCourses,
  setShowAllCourses,
} = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
