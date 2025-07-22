"use client";

import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import phoneCodes from "./phoneCodes.json"; // Updated JSON file

interface DemoFormProps {
  selectedPlan?: string;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  company: string;
  jobTitle: string;
  plan: string;
  preferredDate1: string;
  preferredTime1: string;
  preferredDate2: string;
  preferredTime2: string;
  additionalNotes: string;
}

interface Plan {
  key: string;
  label: string;
}

interface Country {
  code: string;
  label: string;
}

const DemoForm: React.FC<DemoFormProps> = ({ selectedPlan = "", onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    phone: "",
    company: "",
    jobTitle: "",
    plan: "",
    preferredDate1: "",
    preferredTime1: "",
    preferredDate2: "",
    preferredTime2: "",
    additionalNotes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [userTimezone, setUserTimezone] = useState<string>("");
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const plans: Plan[] = [
    { key: "basic", label: "Basic Plan - $25/agent/month" },
    { key: "pro", label: "Pro Plan - $45/agent/month" },
    { key: "enterprise", label: "Enterprise Plan - Custom Pricing" },
  ];

  const timeSlots: string[] = [
    "00:00",
    "00:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
  ];

  // Get user's timezone on component mount
  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setUserTimezone(timezone);
  }, []);

  // Get today's date and 30 days from now for date restrictions
  const today = new Date().toISOString().split("T")[0];
  const maxDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  // Format time for display (24-hour to 12-hour)
  const formatTimeDisplay = (time: string): string => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${minutes} ${period}`;
  };

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    const backendData = {
      ...formData,
      preferredDate1: formData.preferredDate1,
      preferredTime1: formData.preferredTime1,
      preferredDate2: formData.preferredDate2,
      preferredTime2: formData.preferredTime2,
      // timezone: userTimezone,
      timezone: "America/Los_Angeles",
    };

    console.log("Sending to backend:", backendData);

    try {
      const response = await fetch("http://localhost:8090/demo/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(backendData),
      });

      if (response.ok) {
        // Form submitted successfully
        setSubmittedData(formData);
        setIsSubmitted(true);
      } else {
        console.error("Error submitting form", await response.text());
      }
    } catch (error) {
      console.error("Error making API call:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = (): boolean => {
    return (
      Boolean(formData.firstName) &&
      Boolean(formData.lastName) &&
      Boolean(formData.email) &&
      Boolean(formData.countryCode) &&
      Boolean(formData.phone) &&
      Boolean(formData.company) &&
      Boolean(formData.plan) &&
      Boolean(formData.preferredDate1) &&
      Boolean(formData.preferredTime1) &&
      Boolean(formData.preferredDate2) &&
      Boolean(formData.preferredTime2)
    );
  };

  const handleSelectChange = (
    field: keyof FormData,
    keys: Set<React.Key>
  ): void => {
    const value = Array.from(keys)[0] as string;
    handleInputChange(field, value || "");
  };

  if (isSubmitted && submittedData) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <Card className="w-full max-w-2xl bg-white/90 backdrop-blur-sm">
          <CardBody className="p-8 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Demo Scheduled Successfully!
            </h3>
            <p className="text-slate-600 mb-6">
              Thank you for your interest in Convonest. Our team will contact
              you at{" "}
              <strong>
                {submittedData.countryCode}
                {submittedData.phone}
              </strong>{" "}
              within 24 hours to confirm your preferred time slot.
            </p>

            {/* Display scheduled times in user's timezone */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-slate-800 mb-3">
                Your Preferred Times ({userTimezone}):
              </h4>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">First Preference:</span>
                  <span>
                    {new Date(
                      `${submittedData.preferredDate1}T${submittedData.preferredTime1}`
                    ).toLocaleDateString()}{" "}
                    at {formatTimeDisplay(submittedData.preferredTime1)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Second Preference:</span>
                  <span>
                    {new Date(
                      `${submittedData.preferredDate2}T${submittedData.preferredTime2}`
                    ).toLocaleDateString()}{" "}
                    at {formatTimeDisplay(submittedData.preferredTime2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
              <p className="text-sm text-slate-700">
                <strong>Expected Duration:</strong> 30-45 minutes
                <br />
                <strong>What to expect:</strong> Product walkthrough, Q&A
                session, and custom solution discussion
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <Button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setSubmittedData(null);
                  onClose(); // <-- this should also close the modal in the parent
                }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-2 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                size="lg"
                radius="full"
              >
                Close
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-4xl max-h-[95vh] overflow-y-auto">
        <Card className="w-full bg-white/90 backdrop-blur-sm">
          <CardBody className="p-0">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white relative">
              <button
                onClick={onClose}
                type="button"
                className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20"
                aria-label="Close dialog"
              >
                ×
              </button>
              <div className="text-center pr-8">
                <h2 className="text-2xl font-bold mb-2">Schedule Your Demo</h2>
                <p className="text-lg text-blue-100 mb-2">
                  See how Convonest can transform your customer engagement
                </p>
                <div className="flex justify-center items-center gap-4">
                  <div className="inline-block bg-white/20 rounded-full px-3 py-1">
                    <span className="text-sm font-semibold">
                      ⏱️ Duration: 30-45 minutes
                    </span>
                  </div>
                  <div className="inline-block bg-white/20 rounded-full px-3 py-1">
                    <span className="text-sm font-semibold">
                      🌍 Your timezone: {userTimezone}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column - Personal Information */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                      <span className="text-xl mr-2">👤</span>
                      Personal Information
                    </h3>

                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <Input
                        type="text"
                        label="First Name"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        required
                        size="sm"
                        classNames={{
                          input: "bg-white",
                          inputWrapper:
                            "bg-white border-slate-200 hover:border-blue-400 group-data-[focused=true]:border-blue-500",
                        }}
                      />
                      <Input
                        type="text"
                        label="Last Name"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        required
                        size="sm"
                        classNames={{
                          input: "bg-white",
                          inputWrapper:
                            "bg-white border-slate-200 hover:border-blue-400 group-data-[focused=true]:border-blue-500",
                        }}
                      />
                    </div>

                    <div className="space-y-3">
                      <Input
                        type="email"
                        label="Email Address"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                        size="sm"
                        classNames={{
                          input: "bg-white",
                          inputWrapper:
                            "bg-white border-slate-200 hover:border-blue-400 group-data-[focused=true]:border-blue-500",
                        }}
                      />
                      {/* Phone Number with Country Code  */}
                      <div className="flex gap-2">
                        <Select
                          label="Country"
                          placeholder="Select Code"
                          selectedKeys={
                            formData.countryCode
                              ? new Set([formData.countryCode])
                              : new Set()
                          }
                          onSelectionChange={(keys) =>
                            handleSelectChange(
                              "countryCode",
                              keys as Set<React.Key>
                            )
                          }
                          required
                          size="sm"
                          className="w-40 flex-shrink-0" // Balanced width - not too wide, not too narrow
                          classNames={{
                            trigger:
                              "bg-white border-slate-200 hover:border-blue-400 data-[open=true]:border-blue-500",
                            value: "text-sm", // Ensure text is visible
                          }}
                          renderValue={(items) => {
                            // Custom render function to ensure proper display
                            return items.map((item) => {
                              const phoneCode = phoneCodes.find(
                                (code) => code.code === item.key
                              );
                              return phoneCode
                                ? `${phoneCode.code} (${phoneCode.label})`
                                : item.key;
                            });
                          }}
                        >
                          {phoneCodes.map((phoneCode, index) => (
                            <SelectItem
                              key={phoneCode.code}
                              value={phoneCode.code}
                              textValue={`${phoneCode.code} (${phoneCode.label})`}
                            >
                              {phoneCode.code} ({phoneCode.label})
                            </SelectItem>
                          ))}
                        </Select>
                        <Input
                          type="tel"
                          label="Phone Number"
                          placeholder="123-456-7890"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          required
                          size="sm"
                          className="flex-1"
                          classNames={{
                            input: "bg-white",
                            inputWrapper:
                              "bg-white border-slate-200 hover:border-blue-400 group-data-[focused=true]:border-blue-500",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Information */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                      <span className="text-xl mr-2">🏢</span>
                      Company Information
                    </h3>

                    <div className="space-y-3">
                      <Input
                        type="text"
                        label="Company Name"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        required
                        size="sm"
                        classNames={{
                          input: "bg-white",
                          inputWrapper:
                            "bg-white border-slate-200 hover:border-blue-400 group-data-[focused=true]:border-blue-500",
                        }}
                      />
                      <Input
                        type="text"
                        label="Job Title"
                        placeholder="Your job title"
                        value={formData.jobTitle}
                        onChange={(e) =>
                          handleInputChange("jobTitle", e.target.value)
                        }
                        size="sm"
                        classNames={{
                          input: "bg-white",
                          inputWrapper:
                            "bg-white border-slate-200 hover:border-blue-400 group-data-[focused=true]:border-blue-500",
                        }}
                      />
                    </div>
                  </div>

                  {/* Plan Selection */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                      <span className="text-xl mr-2">📋</span>
                      Plan Interest
                    </h3>

                    <Select
                      label="Select Plan"
                      placeholder="Choose a plan to discuss"
                      selectedKeys={
                        formData.plan ? new Set([formData.plan]) : new Set()
                      }
                      onSelectionChange={(keys) =>
                        handleSelectChange("plan", keys as Set<React.Key>)
                      }
                      required
                      size="sm"
                      classNames={{
                        trigger:
                          "bg-white border-slate-200 hover:border-blue-400 data-[open=true]:border-blue-500",
                      }}
                    >
                      {plans.map((plan) => (
                        <SelectItem key={plan.key} value={plan.key}>
                          {plan.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                </div>

                {/* Right Column - Scheduling */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                      <span className="text-xl mr-2">📅</span>
                      Preferred Schedule
                    </h3>
                    <p className="text-sm text-slate-600 mb-1">
                      Please provide two preferred time slots. We'll confirm the
                      best option for both parties.
                    </p>
                    <p className="text-xs text-blue-600 mb-3">
                      🌍 Times shown in your timezone: {userTimezone}
                    </p>
                  </div>

                  {/* First Preference */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">
                        1
                      </span>
                      First Preference
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        type="date"
                        label="Preferred Date"
                        value={formData.preferredDate1}
                        onChange={(e) =>
                          handleInputChange("preferredDate1", e.target.value)
                        }
                        min={today}
                        max={maxDate}
                        required
                        size="sm"
                        classNames={{
                          input: "bg-white",
                          inputWrapper:
                            "bg-white border-slate-200 hover:border-blue-400 group-data-[focused=true]:border-blue-500",
                        }}
                      />
                      <Select
                        label="Preferred Time"
                        placeholder="Select time"
                        selectedKeys={
                          formData.preferredTime1
                            ? new Set([formData.preferredTime1])
                            : new Set()
                        }
                        onSelectionChange={(keys) =>
                          handleSelectChange(
                            "preferredTime1",
                            keys as Set<React.Key>
                          )
                        }
                        required
                        size="sm"
                        classNames={{
                          trigger:
                            "bg-white border-slate-200 hover:border-blue-400 data-[open=true]:border-blue-500",
                        }}
                      >
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {formatTimeDisplay(time)}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  </div>

                  {/* Second Preference */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">
                        2
                      </span>
                      Alternative Preference
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        type="date"
                        label="Alternative Date"
                        value={formData.preferredDate2}
                        onChange={(e) =>
                          handleInputChange("preferredDate2", e.target.value)
                        }
                        min={today}
                        max={maxDate}
                        required
                        size="sm"
                        classNames={{
                          input: "bg-white",
                          inputWrapper:
                            "bg-white border-slate-200 hover:border-blue-400 group-data-[focused=true]:border-blue-500",
                        }}
                      />
                      <Select
                        label="Alternative Time"
                        placeholder="Select time"
                        selectedKeys={
                          formData.preferredTime2
                            ? new Set([formData.preferredTime2])
                            : new Set()
                        }
                        onSelectionChange={(keys) =>
                          handleSelectChange(
                            "preferredTime2",
                            keys as Set<React.Key>
                          )
                        }
                        required
                        size="sm"
                        classNames={{
                          trigger:
                            "bg-white border-slate-200 hover:border-blue-400 data-[open=true]:border-blue-500",
                        }}
                      >
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {formatTimeDisplay(time)}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Additional Notes (Optional)
                    </h4>
                    <textarea
                      className="w-full p-3 border border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none resize-none bg-white text-sm"
                      rows={3}
                      placeholder="Any specific questions or requirements for the demo?"
                      value={formData.additionalNotes}
                      onChange={(e) =>
                        handleInputChange("additionalNotes", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="mt-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-4">
                <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                  <span className="text-lg mr-2">💡</span>
                  What to Expect in Your Demo
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-slate-600">
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-500 font-bold">1.</span>
                    <span>Product walkthrough tailored to your needs</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-500 font-bold">2.</span>
                    <span>Live demonstration of key features</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-500 font-bold">3.</span>
                    <span>Q&A session and pricing discussion</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-center">
                <Button
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-2 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  size="lg"
                  radius="full"
                  isLoading={isSubmitting}
                >
                  {isSubmitting ? "Scheduling Demo..." : "Schedule Demo"}
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default DemoForm;
