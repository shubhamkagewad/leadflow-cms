import { describe, expect, it, vi } from "vitest";

import { createLead } from "../src/controllers/leadController.js";

describe("createLead", () => {
  it("should return 400 when required fields are missing", () => {
    const req = {
      body: {
        name: "John Doe",
        email: "john@example.com",
      },
    } as any;

    const json = vi.fn();

    const res = {
      status: vi.fn().mockReturnValue({
        json,
      }),
    } as any;

    createLead(req, res);

    expect(res.status).toHaveBeenCalledWith(400);

    expect(json).toHaveBeenCalledWith({
      success: false,
      message: "Name, email and message are required.",
    });
  });

  it("should reject an invalid email address", () => {
    const req = {
      body: {
        name: "John Doe",
        email: "invalid-email",
        company: "Example Corp",
        message: "I need a new website.",
      },
    } as any;

    const json = vi.fn();

    const res = {
      status: vi.fn().mockReturnValue({
        json,
      }),
    } as any;

    createLead(req, res);

    expect(res.status).toHaveBeenCalledWith(400);

    expect(json).toHaveBeenCalledWith({
      success: false,

      message: "Please provide a valid email address.",
    });
  });

  it("should create a lead successfully", () => {
    const req = {
      body: {
        name: "John Doe",
        email: "john@example.com",
        company: "Example Corp",
        message: "I need a new website.",
      },
    } as any;

    const json = vi.fn();

    const res = {
      status: vi.fn().mockReturnValue({
        json,
      }),
    } as any;

    createLead(req, res);

    expect(res.status).toHaveBeenCalledWith(201);

    expect(json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: true,
        message: "Lead received successfully.",
      }),
    );
  });
  it("should accept lead data with UTM campaign parameters", () => {
    const req = {
      body: {
        name: "John Doe",
        email: "john@example.com",
        company: "Example Corp",
        message: "Interested in website development.",
        utm_source: "linkedin",
        utm_medium: "social",
        utm_campaign: "leadflow_test",
      },
    } as any;

    const json = vi.fn();

    const res = {
      status: vi.fn().mockReturnValue({
        json,
      }),
    } as any;

    createLead(req, res);

    expect(res.status).toHaveBeenCalledWith(201);

    expect(json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: true,
        message: "Lead received successfully.",
      }),
    );
  });
  it("should accept lead data without UTM parameters", () => {
    const req = {
      body: {
        name: "Jane Doe",
        email: "jane@example.com",
        company: "Example Corp",
        message: "I need SEO assistance.",
      },
    } as any;

    const json = vi.fn();

    const res = {
      status: vi.fn().mockReturnValue({
        json,
      }),
    } as any;

    createLead(req, res);

    expect(res.status).toHaveBeenCalledWith(201);

    expect(json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: true,
      }),
    );
  });
});
