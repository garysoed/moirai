load("@npm//@bazel/typescript:index.bzl", "ts_config")

ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
    deps = ["@devbase//ts:tsconfig"],
    visibility = [":internal"],
)

package_group(
    name = "internal",
    packages = [
      "//export/...",
      "//src/...",
    ]
)
